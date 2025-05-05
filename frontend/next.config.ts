import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Default to local backend in development
const backendUrl = isProduction ? apiUrl : 'http://localhost:8000';

const nextConfig: NextConfig = {
  async rewrites() {
    return backendUrl ? [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/:path*`, // Dynamic destination
      },
    ] : [];
  },
  /* other config options here */
};

export default nextConfig;
