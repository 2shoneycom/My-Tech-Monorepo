import styles from "../../_css/subCategory.module.css";

import Header from '@sean/header-type-a';
import Hero_typeB from '@sean/hero-static-type-b';
import Footer from '@sean/footer-type-a';
import PublicationsSection from '../../_components/PublicationsSection';

// 데이터 로드
import headerData from "../../../src/data/headerData";
import categoryData from "../../../src/data/categoryData";
import footerData from "../../../src/data/footerData";
import { loadPostsByCategory } from "../../../src/api/posts";

interface PageProps {
  params: Promise<{ category: string }>;
}

async function SubCategory({ params }: PageProps) {
  const { category } = await params;

  const heroContents = categoryData.researchAreaData;
  const currentHero = heroContents.find(
    (item) => item.id.toLowerCase() === category.toLowerCase()
  ) || heroContents[0];

  const posts = loadPostsByCategory(category);

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
        category={null}
        title={currentHero.title}
        description={currentHero.description}
      />
      <PublicationsSection posts={posts} />
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default SubCategory;
