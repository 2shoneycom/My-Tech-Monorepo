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
};

module.exports = nextConfig;