/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/rankings",
        destination: "/rankings/1v1/all/1",
        permanent: false,
      },
      {
        source: "/legends/1",
        destination: "/legends/3",
        permanent: false,
      },
      {
        source: "/legends/2",
        destination: "/legends/3",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
