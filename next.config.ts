import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  reactCompiler: true,
  
  allowedDevOrigins: [
    "192.168.1.28", 
    "localhost"
  ],
};

export default nextConfig;