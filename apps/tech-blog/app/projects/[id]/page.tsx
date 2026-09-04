import styles from "../../_css/blogPost.module.css";
import projectStyles from "../../_css/projects.module.css";

import Header from "@sean/header-type-a";
import Footer from "@sean/footer-type-a";
import { getProjectById, loadAllProjects, type Project } from "../../../src/api/projects";

// 데이터 로드
import headerData from "../../../src/data/headerData";
import footerData from "../../../src/data/footerData";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 빌드 시 모든 프로젝트 경로를 정적 생성한다 (SSG)
export function generateStaticParams() {
  return loadAllProjects().map((project) => ({ id: project.id }));
}

// TODO: 그리드에 이어 만든 자리표시 상세 페이지. 실제 레이아웃(스크린샷, 기술 스택,
// 링크 등)은 추후에 채운다.
async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;

  let project: Project | null = null;
  try {
    project = await getProjectById(id);
  } catch (err) {
    console.error("프로젝트 로드 실패:", (err as Error).message);
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
      {!project
        ? <h2>Something went wrong</h2>
        : (
          <div className={projectStyles.detail_container}>
            <div className={projectStyles.detail_thumbnail}>
              {project.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.thumbnail} alt={project.title} />
              )}
            </div>
            <h1 className={projectStyles.detail_title}>{project.title}</h1>
            <p className={projectStyles.detail_description}>{project.description}</p>
            <div
              className={projectStyles.detail_content}
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>
        )
      }
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default ProjectDetail;
