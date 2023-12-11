/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', "raw.githubusercontent.com"],
    },
    compiler: {
        styledComponents: true
    }
}

module.exports = nextConfig
