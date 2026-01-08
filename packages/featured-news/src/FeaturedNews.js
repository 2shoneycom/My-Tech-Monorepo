import { Link } from "react-router-dom";
import styles from "./css/featurednews.module.css";
import CustomCarousel from "./components/CustomCarousel";

function FeaturedNews() {
  return (
    <div className={styles.top_container}>
      {/* 1. Title Area */}
      <div className={styles.ResearchArea_header_wrapper}>
        <h2 className={styles.ResearchArea_header}>Featured news</h2>
      </div>

      {/* 2. Carousel Slider Area */}
      <CustomCarousel gap={10}>



      </CustomCarousel>
    </div>
  );
}

export default FeaturedNews;