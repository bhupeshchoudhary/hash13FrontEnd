// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'www.youtube.com',
            
            
//           },
//         ],
//       },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com', // Add this line to allow LinkedIn images
      },
    ],
  },
};

export default nextConfig;
