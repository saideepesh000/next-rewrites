module.exports = {
  async rewrites() {
    return [
      // Rewriting to an external URL
      {
        source: '/:path*',
        destination: 'https://zhiffy.com/:path*',
      },
    ]
  },
}
