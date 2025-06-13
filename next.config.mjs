// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "wembleypark.com",
//       },
//       {
//         protocol: "https",
//         hostname: "tecdn.b-cdn.net",
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "wembleypark.com",
      },
      {
        protocol: "https",
        hostname: "tecdn.b-cdn.net",
      },
    ],
  },

  // 🚀 Add caching headers for static assets
  async headers() {
    return [
      {
        source: "/(.*).(js|css|jpg|jpeg|png|svg|woff2|ttf|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
