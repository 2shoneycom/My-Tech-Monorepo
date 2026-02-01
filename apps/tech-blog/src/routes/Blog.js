import styles from "../css/blog.module.css";

import Header from "@sean/header-type-a";
import Hero_typeA from "@sean/hero-static-type-a";
import SearchLandingPage from "@sean/searchlandingpage-main";
import Footer from "@sean/footer-type-a";

function Blog() {
  return (
    <div className={styles.top_container}>
      <Header />
      <Hero_typeA />
      <SearchLandingPage />
      <Footer />
    </div>
  );
}

export default Blog;