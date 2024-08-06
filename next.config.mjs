/**
 * @type {import('next').NextConfig}
 */
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Cho phép tất cả các miền
        port: "",
        pathname: "/**", // Cho phép tất cả các đường dẫn
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/app/:slug.php',
        destination: '/app/:slug.html',
      },
      // Add more rewrites as needed
    ];
  },
};

export default withNextIntl(nextConfig);
