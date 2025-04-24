/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig


// module.exports = {
//   webpack(config) {
//     config.plugins.push(
//       new webpack.IgnorePlugin({
//         resourceRegExp: /^react-server-dom-webpack$/,
//       })
//     );
//     return config;
//   },
// };
