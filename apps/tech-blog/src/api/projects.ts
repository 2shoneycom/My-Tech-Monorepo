import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { renderContent } from "../lib/markdown";

// 파일 기반 콘텐츠: apps/tech-blog/content/projects/*.md
const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface ProjectMeta {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  featured: boolean;
}

export interface Project extends ProjectMeta {
  content: string;
}

interface RawProject {
  data: Record<string, unknown>;
  content: string;
}

function readAllRaw(): RawProject[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => matter(fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8")));
}

function toMeta(data: Record<string, unknown>): ProjectMeta {
  return {
    id: String(data.id),
    title: String(data.title),
    description: data.description ? String(data.description) : "",
    thumbnail: String(data.thumbnail ?? ""),
    date: String(data.date ?? ""),
    featured: data.featured === true,
  };
}

// 그리드 카드용 (본문 렌더링 없이 가볍게)
export function loadAllProjects(): ProjectMeta[] {
  return readAllRaw()
    .map((project) => toMeta(project.data))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 상세 페이지용 (본문까지 렌더링)
export async function getProjectById(id: string): Promise<Project> {
  const decodedId = decodeURIComponent(id);
  const found = readAllRaw().find((project) => String(project.data.id) === decodedId);

  if (!found) {
    throw new Error("프로젝트를 찾을 수 없습니다");
  }

  return {
    ...toMeta(found.data),
    content: await renderContent(found.content),
  };
}
