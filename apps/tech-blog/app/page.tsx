"use client";

import styles from "./_css/home.module.css";
import Header from '@sean/header-type-a';
import HeroSlide from '@sean/hero-slide';
import AreaSection from '@sean/research-area';
import Fromtheblog from '@sean/from-the-blog';
import FeaturedNews from '@sean/featured-news';
import Publications from '@sean/section-publications';
import Footer from '@sean/footer-type-a';

// 데이터 로드
import headerData from "../src/data/headerData";
import footerData from "../src/data/footerData";
import categoryData from "../src/data/categoryData";
import { loadSlicedPosts } from "../src/api/posts";
import { useState } from "react";

const PUB_LOAD_AMOUNT = 2;

function Home() {
  // 히어로 슬라이드쇼 데이터 불러오기 (최신순 5개)
  const heroData = loadSlicedPosts(0, 5);
  const fromtheblogData = loadSlicedPosts(0, 5);
  const featuredNewsData = loadSlicedPosts(0, 5);
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

  return (
    <div className={styles.top_container}>
      <Header
        logoImg={headerData.logoImg}
        menuItems={headerData.menuItems}
        subMenuItems={headerData.subMenuItems}
        subTitles={headerData.subTitles}
        socialItems={footerData.socialItems}
      />
      <HeroSlide data={heroData} />
      <AreaSection data={[...categoryData.researchAreaData, ...categoryData.extraCategoryData]} />
      <Fromtheblog
        viewAllLik="Article Search"
        data={fromtheblogData}
      />
      <FeaturedNews data={featuredNewsData} />
      <Publications data={publicationsData} loadNext={loadNextPublications} />
      <Footer 
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default Home;