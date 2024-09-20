/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/israeli-indie-hackers",
        destination: "https://docs.google.com/spreadsheets/d/1_pTq-q1tpP7xrQNmTn7KhmmVFNhpcsRQYhekkhH3SME/preview",
        permanent: false,
        basePath: false,
      },
      {
        source: "/iii",
        destination: "https://ysh.li/israeli-indie-hackers",
        permanent: false,
        basePath: false,
      },
      {
        source: "/indie-tlv",
        destination: "https://ysh.li/israeli-indie-hackers",
        permanent: false,
        basePath: false,
      },
      {
        source: "/r",
        destination:
          "https://zora.co/collect/base:0x6917816657cee0868d43abe1749b45e3cefa726c/premint-1?referrer=0xd81B7A2a1bBf3e1c713f2A5C886f88EE5f862417",
        permanent: false,
        basePath: false,
      },
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
