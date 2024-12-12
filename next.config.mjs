/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
import { env } from "process";

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "github-readme-stats.vercel.app",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
