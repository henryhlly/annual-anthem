import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'img.youtube.com',
          port: '',
          pathname: '/vi/**',
          search: '',
        },
      ],
    },
}

export default nextConfig;
