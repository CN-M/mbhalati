import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/post/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

// export default nextConfig;
// module.exports = withContentlayer(nextConfig);
export default withContentlayer(nextConfig);
