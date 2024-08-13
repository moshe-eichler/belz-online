
module.exports = {
  reactStrictMode: true,  
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lists/members',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com/file/d/17nxvGrun9uS_LmWo2kRESz2yD-3DvY5S/view',
        port: '',
        pathname: '/**',
      },
    ],
  }
} 
