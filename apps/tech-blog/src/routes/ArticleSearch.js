import styles from "../css/blog.module.css";
import { dummyPosts } from "../data/dummyPosts";
import { useState } from "react";

import Header from "@sean/header-type-a";
import Hero_typeA from "@sean/hero-static-type-a";
import SearchLandingPage from "@sean/searchlandingpage-main";
import Footer from "@sean/footer-type-a";

import logoImg from "../assets/images/logo.png";

function ArticleSearch() {
  const [filteredResults, setFilteredResults] = useState(dummyPosts);

  return (
    <div className={styles.top_container}>
      <Header logoImg={logoImg}/>
      <Hero_typeA />
      <SearchLandingPage results={filteredResults}/>
      <Footer />
    </div>
  );
}

export default ArticleSearch;