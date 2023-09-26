/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./src/framework/common/config")

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
})
