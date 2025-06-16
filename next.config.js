/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/sessions',
        destination: '/dashboardLayout/sessions',
      },
      // Add more clean URLs for other dashboard pages here
    ];
  },
};

module.exports = nextConfig;
