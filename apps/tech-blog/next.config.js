/** @type {import('next').NextConfig} */
const nextConfig = {
  // 모노레포 내의 패키지 이름들을 여기에 추가합니다.
  transpilePackages: [
    "@sean/articlePage-main",
    "@sean/custom-carousel",
    "@sean/featured-news",
    "@sean/footer-type-a",
    "@sean/from-the-blog",
    "@sean/hero-slide",
    "@sean/hero-static-type-a",
    "@sean/hero-static-type-b",
    "@sean/promo-a",
    "@sean/promo-f",
    "@sean/research-area",
    "@sean/header-type-a",
    "@sean/searchlandingpage-main",
    "@sean/section-publications",
  ],
  reactStrictMode: true,
  // 파일 기반 콘텐츠(content/posts/*.md)가 서버리스 빌드 결과물에서
  // 누락되지 않도록 명시적으로 포함시킨다.
  outputFileTracingIncludes: {
    "/**": ["./content/posts/**"],
  },
};

module.exports = nextConfig;