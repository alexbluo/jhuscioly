/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // no clue what this actually does but it fixes some build error
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
