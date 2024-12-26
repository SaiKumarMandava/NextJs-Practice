// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable SWC minification for smaller build files
    swcMinify: true,
  
    // Customize Webpack configuration
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Optimize client-side bundles
        config.optimization.splitChunks = {
          chunks: 'all',
          maxSize: 250000, // Set maximum chunk size (e.g., 250 KB)
        };
      }
  
      // Return the modified config
      return config;
    },
  
    // Enable experimental features (optional)
    experimental: {
      outputStandalone: true, // Use standalone output for optimized deployment
    },
  };
  
  export default nextConfig;
  