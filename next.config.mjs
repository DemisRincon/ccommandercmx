/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler:{
        styledComponents: true,
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                 {
                   key: 'Content-Security-Policy',
                   value: "upgrade-insecure-requests"
                 }
                ],
              },
        ];
    },
};

export default nextConfig;
