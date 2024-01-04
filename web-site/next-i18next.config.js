// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
  },
};

module.exports = nextConfig;
