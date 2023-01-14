/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  extends: [
    //...
    "plugin:@next/next/recommended",
  ],
};
