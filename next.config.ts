const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "999mb", // 본문 크기 제한을 10MB로 설정
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  useFileSystemPublicRoutes: true,
  experimental: {
    scrollRestoration: true,
    largePageDataBytes: 2000 * 10000, //which exceeds the threshold of 128 kB 이슈로 인해 추가 현재 800kB로 늘려놓은 상태
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
