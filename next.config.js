/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // allow domains for images from urls
    domains: ["bit.ly", "pbs.twimg.com"],
  },
};

module.exports = nextConfig;
