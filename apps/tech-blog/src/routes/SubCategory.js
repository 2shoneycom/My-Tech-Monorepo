import styles from "../css/subCategory.module.css";
import { dummyPosts } from "../data/dummyPosts";

import Header from '@sean/header-type-a';
import Hero_typeB from '@sean/hero-static-type-b';
import Publications from '@sean/section-publications';
import Footer from '@sean/footer-type-a';

// 데이터 로드
import headerData from "../data/headerData";
import categoryData from "../data/categoryData";
import footerData from "../data/footerData";
import { useParams } from "react-router-dom";

function SubCategory({ fixedCategory }) {
  const params = useParams();
  const category = fixedCategory === undefined ? params.category : fixedCategory;
  const heroContents = fixedCategory === undefined ? categoryData.researchAreaData : categoryData.extraCategoryData;

  // 현재 URL 파라미터와 일치하는 Hero 콘텐츠 찾기
  const currentHero = heroContents.find(
    (item) => item.id.toLowerCase() === category.toLowerCase()
  ) || heroContents[0];

  // 게시글 목록 필터링 (현재 카테고리와 일치하는 글만 추리기)
  const filteredPublications = dummyPosts.filter(
    (post) => post.category.toLowerCase() === category.toLocaleLowerCase()
  );

  return (
    <div className={styles.top_container}>
      <Header
        logoImg={headerData.logoImg}
        menuItems={headerData.menuItems}
        subMenuItems={headerData.subMenuItems}
        subTitles={headerData.subTitles}
        socialItems={footerData.socialItems}
      />
      <Hero_typeB
        img={currentHero.icon}
        category={fixedCategory === null ? "Research Area" : null}
        title={currentHero.title}
        description={currentHero.description}
      />
      <Publications data={filteredPublications} />
      <Footer />
    </div>
  );
}

export default SubCategory;