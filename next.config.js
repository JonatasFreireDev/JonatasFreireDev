/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "pt-BR"],
  },
};

module.exports = nextConfig;
