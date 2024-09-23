import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        { hostname: "images.unsplash.com" },
        { hostname: "unsplash.com" },
        { hostname: "lh3.googleusercontent.com" },
        { hostname: "plus.unsplash.com" },
      ],
    },
    experimental: {
      serverActions: true,
    },
  };

export default nextConfig;
