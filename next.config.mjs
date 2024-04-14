/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dynamic.bonfireassets.com",
      },
      {
        hostname: "bbdniit.ac.in",
      },
    ],
  },
};

export default nextConfig;
