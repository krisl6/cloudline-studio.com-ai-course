import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Building, Mail, Phone, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function BankTransferContent() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link href="/#pricing" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>
          <h1 className="text-3xl font-bold">Complete Your Annual Subscription</h1>
          <p className="text-muted-foreground">
            Follow these simple steps to activate your AI Essentials Club membership with zero fees
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Bank Transfer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Bank Details */}
              <div className="space-y-4">
                <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Account Name:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">AI Essentials Club Pte Ltd</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Bank:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">DBS Bank Singapore</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Account Number:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">123-456789-001</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">SWIFT Code:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">DBSSSGSG</span>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Reference */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Important: Payment Reference</h4>
                  <p className="text-sm text-yellow-700 mb-2">
                    Please include this reference in your transfer:
                  </p>
                  <div className="flex items-center gap-2 bg-white p-2 rounded border">
                    <span className="font-mono font-bold">AI-ANNUAL-2024-[YOUR-EMAIL]</span>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-medium">Need Help?</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>payments@aiessentialsclub.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+65 1234 5678</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Make Bank Transfer</h4>
                    <p className="text-sm text-muted-foreground">
                      Transfer the amount using the bank details provided. Include the payment reference.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Send Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      Email us the transfer receipt at payments@aiessentialsclub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Get Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive login credentials within 24 hours of payment confirmation
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Reminder */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Your Benefits
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 25% discount on annual billing</li>
                  <li>• Zero processing fees</li>
                  <li>• Full year access guaranteed</li>
                  <li>• Professional invoice for tax purposes</li>
                  <li>• Priority customer support</li>
                </ul>
              </div>

              <Button className="w-full" asChild>
                <Link href="mailto:payments@aiessentialsclub.com?subject=Annual%20Subscription%20Payment&body=Hi,%0A%0AI%20have%20completed%20the%20bank%20transfer%20for%20my%20annual%20AI%20Essentials%20Club%20subscription.%0A%0APlease%20find%20the%20transfer%20receipt%20attached.%0A%0AThank%20you!">
                  📧 Send Payment Confirmation
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">How long does it take to get access?</h4>
                <p className="text-sm text-muted-foreground">
                  We typically process payments within 24 hours during business days. You'll receive an email with your login credentials once confirmed.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Can I get a refund?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Do you accept international transfers?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we accept SWIFT transfers from any country. Additional bank fees may apply depending on your bank.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Will I get an invoice?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, we'll send you a professional invoice that you can use for tax purposes or expense reimbursement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function BankTransferPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BankTransferContent />
    </Suspense>
  );
}
