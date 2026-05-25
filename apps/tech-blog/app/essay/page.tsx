"use client";

import styles from "../_css/subCategory.module.css";
import { dummyPosts } from "../../src/data/dummyPosts";

import Header from '@sean/header-type-a';
import Hero_typeB from '@sean/hero-static-type-b';
import Publications from '@sean/section-publications';
import Footer from '@sean/footer-type-a';

// 데이터 로드
import headerData from "../../src/data/headerData";
import categoryData from "../../src/data/categoryData";
import footerData from "../../src/data/footerData";
import { useState } from "react";
import { loadSlicedPosts } from "../../src/api/posts";

const PUB_LOAD_AMOUNT = 2;

function SubCategory({ fixedCategory = "Essay" }) {
  const category = fixedCategory;
  const heroContents = fixedCategory === undefined ? categoryData.researchAreaData : categoryData.extraCategoryData;
  const [pubIdx, setPubIdx] = useState(0);
  const [publicationsData, setPublicationsData] = useState(loadSlicedPosts(pubIdx, pubIdx + PUB_LOAD_AMOUNT));

  const loadNextPublications = () => {
    // 2. 현재 인덱스에 불러올 개수를 더해 '다음 인덱스'를 미리 계산합니다.
    const nextIdx = pubIdx + PUB_LOAD_AMOUNT;
    console.log(`불러올 다음 인덱스: ${nextIdx}`);

    // 3. 계산된 값을 state에 저장해 다음번 클릭을 대비합니다.
    setPubIdx(nextIdx);

    // 4. 기존 데이터(prevData)에 새 데이터를 이어 붙입니다.
    setPublicationsData((prevData) =>
      prevData.concat(loadSlicedPosts(nextIdx, nextIdx + PUB_LOAD_AMOUNT))
    );
  }

  const currentHero = heroContents.find(
    (item) => item.id.toLowerCase() === category.toLowerCase()
  ) || heroContents[0];

  const filteredPublications = dummyPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
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
      <Publications data={filteredPublications} loadNext={loadNextPublications} />
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default SubCategory;