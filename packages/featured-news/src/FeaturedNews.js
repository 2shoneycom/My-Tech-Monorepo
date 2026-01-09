import { Link } from "react-router-dom";
import styles from "./css/featurednews.module.css";
import CustomCarousel from '@sean/custom-carousel';

function FeaturedNews() {
  return (
    <div className={styles.top_container}>
      {/* 1. Title Area */}
      <div className={styles.featured_header_wrapper}>
        <h2 className={styles.featured_header}>Featured news</h2>
      </div>

      {/* 2. Carousel Slider Area */}
      <CustomCarousel gap={10}>
        <div className={styles.flickity_cell}>
          
        </div>
      </CustomCarousel>
    </div>
  );
}

export default FeaturedNews;