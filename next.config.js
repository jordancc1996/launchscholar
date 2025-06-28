/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Type checking is handled by the IDE and CI/CD
    ignoreBuildErrors: false,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  },
  trailingSlash: false,
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all'
    }
    return config
  },
  env: {
    CUSTOM_KEY: 'launch-scholar-typescript',
  },
}

module.exports = nextConfig

