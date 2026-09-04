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
import { loadAllPosts } from "../src/api/posts";

function Home() {
  const posts = loadAllPosts();

  // 히어로 슬라이드쇼 데이터 (최신순 5개)
  const heroData = posts.slice(0, 5);
  const fromtheblogData = posts.slice(0, 5);
  const featuredNewsData = posts.slice(0, 5);

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
      <PublicationsSection posts={posts} />
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default Home;
