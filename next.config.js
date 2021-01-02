module.exports = {
  async rewrites() {
    return [
      // Rewriting to an external URL
      {
        source: '/:path*',
        destination: 'https://reactnative.dev/:path*',
      },
    ]
  },
}
