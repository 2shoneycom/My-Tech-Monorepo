import styles from "./_css/home.module.css";
import Header from '@sean/header-type-a';
import HeroSlide from '@sean/hero-slide';
import AreaSection from '@sean/research-area';
import Fromtheblog from '@sean/from-the-blog';
import FeaturedNews from '@sean/featured-news';
import Footer from '@sean/footer-type-a';
import PublicationsSection from './_components/PublicationsSection';

// 데이터 로드
import headerData from "../src/data/headerData";
import footerData from "../src/data/footerData";
import categoryData from "../src/data/categoryData";
import { loadPostsByCategories } from "../src/api/posts";
import { loadAllContent, loadFeaturedContent, postsToContentItems } from "../src/api/content";

const BLOG_CATEGORIES = categoryData.researchAreaData.map((item) => item.id);

function Home() {
  // 슬라이드 캐러셀 / Publications: 글 + 프로젝트를 합쳐 분야 상관없이 최신순
  const content = loadAllContent();

  // 히어로 슬라이드쇼: 전체 콘텐츠 중 최신 5개
  const heroData = content.slice(0, 5);
  // From the blog: Blog 카테고리(Web/Algorithm/Developments)에 속한 글만, 최신 5개
  const fromtheblogData = postsToContentItems(loadPostsByCategories(BLOG_CATEGORIES)).slice(0, 5);
  // Featured news: frontmatter에 featured: true가 붙은 글/프로젝트만 최신순
  const featuredNewsData = loadFeaturedContent().slice(0, 5);

  return (
    <div className={styles.top_container}>
      <Header
        logoImg={headerData.logoImg}
        menuItems={headerData.menuItems}
        subMenuItems={headerData.subMenuItems}
        subTitles={headerData.subTitles}
        socialItems={footerData.socialItems}
      />
      <HeroSlide data={heroData} />
      <AreaSection data={[...categoryData.researchAreaData, ...categoryData.extraCategoryData]} />
      <Fromtheblog
        viewAllLik="article-search"
        data={fromtheblogData}
      />
      <FeaturedNews data={featuredNewsData} />
      <PublicationsSection posts={content} />
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default Home;
