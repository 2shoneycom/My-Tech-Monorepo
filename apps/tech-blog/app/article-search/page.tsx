"use client";

import styles from "../_css/blog.module.css";
import { dummyPosts } from "../../src/data/dummyPosts";
import { useState } from "react";

import Header from "@sean/header-type-a";
import Hero_typeA from "@sean/hero-static-type-a";
import SearchLandingPage from "@sean/searchlandingpage-main";
import Footer from "@sean/footer-type-a";

// 데이터 로드
import headerData from "../../src/data/headerData"; 
import footerData from "../../src/data/footerData";

function ArticleSearch() {
  const [filteredResults, setFilteredResults] = useState(dummyPosts);

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
      <SearchLandingPage results={filteredResults} />
      <Footer 
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default ArticleSearch;