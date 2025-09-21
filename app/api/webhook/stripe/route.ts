import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Payment successful:', session.id);
        
        // Here you would typically:
        // 1. Create user account in your database
        // 2. Send welcome email
        // 3. Grant access to your platform
        // 4. Update subscription status
        
        await handleSuccessfulPayment(session);
        break;

      case 'customer.subscription.created':
        const subscription = event.data.object as Stripe.Subscription;
        console.log('Subscription created:', subscription.id);
        
        // Handle new subscription
        await handleSubscriptionCreated(subscription);
        break;

      case 'customer.subscription.updated':
        const updatedSubscription = event.data.object as Stripe.Subscription;
        console.log('Subscription updated:', updatedSubscription.id);
        
        // Handle subscription changes (plan changes, etc.)
        await handleSubscriptionUpdated(updatedSubscription);
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription;
        console.log('Subscription cancelled:', deletedSubscription.id);
        
        // Handle subscription cancellation
        await handleSubscriptionCancelled(deletedSubscription);
        break;

      case 'invoice.payment_failed':
        const failedInvoice = event.data.object as Stripe.Invoice;
        console.log('Payment failed:', failedInvoice.id);
        
        // Handle failed payment
        await handlePaymentFailed(failedInvoice);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  // Implement your business logic here
  // Example: Create user account, send welcome email, etc.
  
  const customerEmail = session.customer_details?.email;
  const planName = session.metadata?.planName;
  const planType = session.metadata?.planType;
  
  console.log('New customer:', {
    email: customerEmail,
    plan: planName,
    type: planType,
    sessionId: session.id
  });
  
  // TODO: Implement your database operations here
  // - Create/update user record
  // - Set subscription status
  // - Send welcome email
  // - Grant platform access
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  // Handle new subscription logic
  console.log('Processing new subscription:', subscription.id);
  
  // TODO: Update your database with subscription details
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  // Handle subscription update logic
  console.log('Processing subscription update:', subscription.id);
  
  // TODO: Update subscription details in your database
}

async function handleSubscriptionCancelled(subscription: Stripe.Subscription) {
  // Handle subscription cancellation logic
  console.log('Processing subscription cancellation:', subscription.id);
  
  // TODO: Update user access, send cancellation email, etc.
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  // Handle failed payment logic
  console.log('Processing failed payment:', invoice.id);
  
  // TODO: Send payment failure notification, update subscription status
}
