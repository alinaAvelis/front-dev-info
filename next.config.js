// This file sets a custom webpack configuration to use your Next.js app
const { withSentryConfig } = require('@sentry/nextjs');
/** @type {import('next').NextConfig} */

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true
  },
  experimental: {
    appDir: true,
  },
  sentry: {
    hideSourceMaps: false,
  }

};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);