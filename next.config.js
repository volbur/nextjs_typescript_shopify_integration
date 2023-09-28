/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./src/framework/common/config")

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local"
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
})
