/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: { tsconfigPath: 'tsconfig.json' },
  images: {
    domains: ['gateway.pinata.cloud'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'es'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        // matching all URL paths
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://player.vimeo.com;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig