import styles from "../css/subCategory.module.css";
import { dummyPosts } from "../data/dummyPosts";

import Header from '@sean/header-type-a';
import Hero_typeB from '@sean/hero-static-type-b';
import Publications from '@sean/section-publications';
import Footer from '@sean/footer-type-a';

import logoImg from "../assets/images/logo.png";
import webIcon from "../assets/images/web_icon.jpg";
import algorithmIcon from "../assets/images/algorithm_icon.jpg";
import developmentsIcon from "../assets/images/developments_icon.jpg";
import { useParams } from "react-router-dom";

const heroContents = [
  {
    id: "Web",
    icon: webIcon,
    title: "Web",
    description: "웹 프로젝트를 진행하며 연구한 프론트엔드/백엔드를 아우르는 전반적인 웹 지식 및 경험을 기술합니다.",
  },
  {
    id: "Algorithm",
    icon: algorithmIcon,
    title: "Algorithm",
    description: "효율적인 문제 해결을 위한 알고리즘 설계와 복잡도 분석 기록입니다.",
  },
  {
    id: "Developments",
    icon: developmentsIcon,
    title: "Developments",
    description: "모노레포 관리, 버전 관리 등 소프트웨어 공학적 접근법을 다룹니다.",
  }
];

function SubCategory() {
  const { category } = useParams();

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
      <Header logoImg={logoImg} />
      <Hero_typeB
        img={currentHero.icon}
        category="Research Area"
        title={currentHero.title}
        description={currentHero.description}
      />
      <Publications data={filteredPublications} />
      <Footer />
    </div>
  );
}

export default SubCategory;