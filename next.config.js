module.exports = {
  //reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.*.*',
      },
      {
        protocol: 'https',
        hostname: '*.*',
      },
      {
        protocol: 'https',
        hostname: 'www.thestreet.com',
        pathname: '/.image/**',
      },
    ],
  },
};
