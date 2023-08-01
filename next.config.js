// This file sets a custom webpack configuration to use your Next.js app
/** @type {import('next').NextConfig} */

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true
  },
};


module.exports = moduleExports;