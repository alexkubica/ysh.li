/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/a",
        destination: "https://alexkubica.com",
        permanent: false,
        basePath: false,
      },
      {
        source: "/mario",
        destination: "https://mario-kart-3-js.vercel.app",
        permanent: false,
        basePath: false,
      },
      {
        source: "/alex/mail",
        destination: "mailto:me@alexkubica.com",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
