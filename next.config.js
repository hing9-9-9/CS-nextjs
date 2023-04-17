const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

rewrites: async() => [
  {
      source: "/public/index.html",
      destination: "/pages/api/api.js",
  },
]