/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // webpack: (config, context) => {
    //     config.watchOptions = {
    //         poll: 800,
    //         aggregateTimeout: 300,
    //     }
    //     return config
    // }
    output: 'standalone',
}

module.exports = nextConfig
