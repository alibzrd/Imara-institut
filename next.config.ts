import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/imara",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
