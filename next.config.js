/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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

module.exports = nextConfig;
