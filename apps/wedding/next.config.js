const { withAxiom } = require('next-axiom')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
}

module.exports = withAxiom(nextConfig)
