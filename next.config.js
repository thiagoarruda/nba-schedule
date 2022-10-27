/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://nba.thiagoarruda.com/api/:path*'
      }
    ]
  }
}
