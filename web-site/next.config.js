// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async generateStaticParams() {
    const pathMap = {};
    const pages = ["index", "teacher"]; // 必要なページをここに追加
    for (const page of pages) {
      pathMap[`${page}.html`] = {
        page: `/${page}`, // pages ディレクトリ内のファイルパスを指定
      };
    }
    return pathMap;
  },
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/Users/agile03/Development/nomura-shodo/nomura-syodou.github.io/web-site/out/"
      : "",
  publicRuntimeConfig: {
    assetPrefix:
      process.env.NODE_ENV === "production"
        ? "/Users/agile03/Development/nomura-shodo/nomura-syodou.github.io/web-site/out/"
        : "",
  },
};

module.exports = nextConfig;
