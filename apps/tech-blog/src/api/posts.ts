import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { renderContent } from "../lib/markdown";

// 파일 기반 콘텐츠: apps/tech-blog/content/posts/*.md
// 각 파일은 frontmatter(메타데이터) + 본문으로 구성된다.
const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  id: string;
  category: string;
  tag: string[];
  title: string;
  subTitle: string;
  author: string;
  date: string;
  readDuration: number;
  thumbnail: string;
}

export interface Post extends PostMeta {
  content: string;
}

interface RawPost {
  data: Record<string, unknown>;
  content: string;
}

function readAllRaw(): RawPost[] {
  const files = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  return files.map((file) => matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8")));
}

function toMeta(data: Record<string, unknown>): PostMeta {
  return {
    id: String(data.id),
    category: String(data.category),
    tag: Array.isArray(data.tag) ? (data.tag as string[]) : [],
    title: String(data.title),
    subTitle: data.subTitle ? String(data.subTitle) : "",
    author: String(data.author),
    date: String(data.date),
    readDuration: Number(data.readDuration) || 0,
    thumbnail: String(data.thumbnail ?? ""),
  };
}

function getAllPostsMeta(): PostMeta[] {
  return readAllRaw()
    .map((post) => toMeta(post.data))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 구간별 게시글 로드 (목록 카드용 — 본문 렌더링은 하지 않아 가볍다)
export function loadSlicedPosts(fromIdx: number, toIdx: number): PostMeta[] {
  return getAllPostsMeta().slice(fromIdx, toIdx);
}

export function loadAllPosts(): PostMeta[] {
  return getAllPostsMeta();
}

export function loadPostsByCategory(category: string): PostMeta[] {
  return getAllPostsMeta().filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

// id로 게시글 가져오기 (상세 페이지용 — 본문까지 렌더링)
export async function getPostById(id: string): Promise<Post> {
  const decodedId = decodeURIComponent(id);
  const found = readAllRaw().find((post) => String(post.data.id) === decodedId);

  if (!found) {
    throw new Error("게시글을 찾을 수 없습니다");
  }

  return {
    ...toMeta(found.data),
    content: await renderContent(found.content),
  };
}
