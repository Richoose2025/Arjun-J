/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/arjun-portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: '/arjun-portfolio/'
}

export default nextConfig