/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "img.shields.io"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/vignesh-gupta/zero-path",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
