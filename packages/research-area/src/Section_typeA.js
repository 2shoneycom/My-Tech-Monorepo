import { Link } from "react-router-dom";
import styles from "./css/section_typeA.module.css";
import CustomCarousel from "./components/CustomCarousel";

function Section_typeA({ data = [] }) {
  // 받은 data 전처리 (2개씩 그룹핑)
  const groups = [];  // groups = [ [data1, data2], [data3, data4], ... ]
  for (let i = 0; i < data.length; i += 2) {
    groups.push(data.slice(i, i + 2));
  }

  return (
    <div className={styles.top_container}>
      {/* 1. Title Area */}
      <div className={styles.ResearchArea_header_wrapper}>
        <h2 className={styles.ResearchArea_header}>Research areas</h2>
      </div>

      {/* 2. Carousel Slider Area */}
      <CustomCarousel gap={10}>

        {groups.map((group, groupIdx) => (
          // 이미지 드래그 방지 (중요: 이미지가 드래그되면 슬라이드가 안됨)
          <div
            key={groupIdx}
            className={styles.flickity_group}
            onDragStart={e => e.preventDefault()}
          >
            {group.map((item) => (
              <div key={item.id} className={styles.ResearchAreaCard}>
                <Link
                  className={styles.ResearchAreaCard_link}
                  to={item.link}
                >
                  <div className={styles.ResearchAreaCard_media}>
                    <picture>
                      <img data-image-size="mediumIcon" alt={`${item.title}.svg`} width="48" height="48" src={item.media_source} />
                    </picture>
                  </div>
                  <div className={styles.ResearchAreaCard_content}>
                    <div className={styles.ResearchAreaCard_title}>
                      {item.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}

      </CustomCarousel>
    </div>
  );
}

export default Section_typeA;