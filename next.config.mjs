/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testbucker1212e1212lk21.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
