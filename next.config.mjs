/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


// import withBundleAnalyzer from '@next/bundle-analyzer';

// /** @type {import('next').NextConfig} */
// const nextConfig = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
//   swcMinify: true, // Enable SWC minification
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.optimization.splitChunks = {
//         chunks: 'all',
//         maxSize: 250000, // Limit chunk size to 250 KB
//       };
//     }
//     return config;
//   },
// });

// export default nextConfig;
