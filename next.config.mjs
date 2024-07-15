import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
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
};

export default withNextIntl(nextConfig);
