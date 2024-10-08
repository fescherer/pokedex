/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'raw.githubusercontent.com',
      'cdn.playscores.com',
      'www.shutterstock.com'
    ],
    unoptimized: true,
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
