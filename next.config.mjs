/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/mario",
        destination: "https://mario-kart-3-js.vercel.app",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
