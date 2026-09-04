import styles from "../_css/blog.module.css";

import Header from "@sean/header-type-a";
import Hero_typeA from "@sean/hero-static-type-a";
import SearchLandingPage from "@sean/searchlandingpage-main";
import Footer from "@sean/footer-type-a";

// 데이터 로드
import headerData from "../../src/data/headerData";
import footerData from "../../src/data/footerData";
import { loadAllPosts } from "../../src/api/posts";

function ArticleSearch() {
  const posts = loadAllPosts();

  return (
    <div className={styles.top_container}>
      <Header
        logoImg={headerData.logoImg}
        menuItems={headerData.menuItems}
        subMenuItems={headerData.subMenuItems}
        subTitles={headerData.subTitles}
        socialItems={footerData.socialItems}
      />
      <Hero_typeA />
      <SearchLandingPage results={posts} />
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default ArticleSearch;
