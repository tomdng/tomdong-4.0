module.exports = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    })
    return config
  },
}
