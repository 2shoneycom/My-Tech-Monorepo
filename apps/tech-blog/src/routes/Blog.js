import styles from "../css/blog.module.css";

import Header from "@sean/header-type-a";
import Hero_typeA from "@sean/hero-static-type-a";
import Footer from "@sean/footer-type-a";

function Blog() {
  return (
    <div className={styles.top_container}>
      <Header />
      <Hero_typeA />
      <Footer />
    </div>
  );
}

export default Blog;