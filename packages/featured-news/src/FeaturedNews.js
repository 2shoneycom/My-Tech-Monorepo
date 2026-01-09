import styles from "./css/featurednews.module.css";
import CustomCarousel from '@sean/custom-carousel';
import PromoA from '@sean/promo-a';

function FeaturedNews({ data = [] }) {
  return (
    <div className={styles.top_container}>
      {/* 1. Title Area */}
      <div className={styles.featured_header_wrapper}>
        <h2 className={styles.featured_header}>Featured news</h2>
      </div>

      {/* 2. Carousel Slider Area */}
      <CustomCarousel gap={20}>
        {data.map((item, index) => (
          <div className={styles.flickity_cell} key={index}>
            <PromoA 
             item={item}
             detailsOn={false}
             categoryOn={false}
            />
          </div>
        ))}
      </CustomCarousel>
    </div>
  );
}

export default FeaturedNews;