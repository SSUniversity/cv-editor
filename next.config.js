/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_SERVER_URL: process.env.local,
      },
}

module.exports = nextConfig
