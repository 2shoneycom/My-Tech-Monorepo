import Link from "next/link";
import styles from "../_css/projects.module.css";
import type { ProjectMeta } from "../../src/api/projects";

// 정적 그리드 렌더링만 하므로 상호작용(state) 없이 서버 컴포넌트로 렌더 가능
function ProjectGrid({ projects }: { projects: ProjectMeta[] }) {
  if (projects.length === 0) {
    return (
      <div className={styles.grid_container}>
        <p className={styles.empty}>아직 등록된 프로젝트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid_container}>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.id}>
            <Link className={styles.card} href={`/projects/${project.id}`}>
              <div className={styles.card_thumbnail}>
                {project.thumbnail && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.thumbnail} alt={project.title} />
                )}
              </div>
              <h3 className={styles.card_title}>{project.title}</h3>
              <p className={styles.card_description}>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectGrid;
