import styles from "../css/blog.module.css";

import Header from "@sean/header-type-a";
import Footer from "@sean/footer-type-a";

function Blog() {
  return (
    <div className={styles.top_container}>
      <Header />
      <Footer />
    </div>
  );
}

export default Blog;