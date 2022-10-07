/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: { tsconfigPath: 'tsconfig.json' },
  images: {
    domains: ['gateway.pinata.cloud'],
  },
}

module.exports = nextConfig
