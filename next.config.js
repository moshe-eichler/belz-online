
export const reactStrictMode = true
export async function redirects() {
  return [
    {
      source: '/',
      destination: '/lists/members',
      permanent: true,
    },
  ]
}
export const images = {
  allowFutureImage: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'drive.google.com/file/d/17nxvGrun9uS_LmWo2kRESz2yD-3DvY5S/view',
      port: '',
      pathname: '/**',
    },
  ],
}
