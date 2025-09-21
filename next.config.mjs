/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/ai-course',
  assetPrefix: '/ai-course',
  trailingSlash: true,
  output: 'export',
}

export default nextConfig
