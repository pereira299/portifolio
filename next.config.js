/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['http://localhost:3000', 'via.placeholder.com'],
    },
    env: {
        EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
        EMAIL_PASS: process.env.EMAIL_PASS,
    },
    //favicon: 'public/favicon.png',
}

module.exports = nextConfig
