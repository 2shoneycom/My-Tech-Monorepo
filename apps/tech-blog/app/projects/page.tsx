import styles from "../_css/subCategory.module.css";

import Header from "@sean/header-type-a";
import Hero_typeB from "@sean/hero-static-type-b";
import Footer from "@sean/footer-type-a";
import ProjectGrid from "../_components/ProjectGrid";

// 데이터 로드
import headerData from "../../src/data/headerData";
import categoryData from "../../src/data/categoryData";
import footerData from "../../src/data/footerData";
import { loadAllProjects } from "../../src/api/projects";

const CATEGORY = "Projects";

function ProjectsPage() {
  const heroContents = categoryData.extraCategoryData;
  const currentHero = heroContents.find(
    (item) => item.id.toLowerCase() === CATEGORY.toLowerCase()
  ) || heroContents[0];

  const projects = loadAllProjects();

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
      <ProjectGrid projects={projects} />
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default ProjectsPage;
