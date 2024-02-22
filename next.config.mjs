/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/alex",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
