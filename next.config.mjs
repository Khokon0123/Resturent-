/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/maps/**",
      },
      {
        protocol: "https",
        hostname: "images.grocerybabu.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.sfbl.com.bd",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.shanfoods.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
