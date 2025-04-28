/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Essential for static export
  // Replace 'arjun-portfolio' with your actual repository name
  basePath: '/arjun-portfolio',  // Hardcoded for GitHub Pages path
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // Required for static export
  },
  assetPrefix: './',  // Helps with relative paths in exported files
}

// Use CommonJS export syntax instead of ES modules
module.exports = nextConfig