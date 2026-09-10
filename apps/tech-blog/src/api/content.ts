import { loadAllPosts, type PostMeta } from "./posts";
import { loadAllProjects, type ProjectMeta } from "./projects";

// 홈페이지의 슬라이드 캐러셀 / Featured news / Publications는 "글"과 "프로젝트"를
// 구분하지 않고 최신순으로 섞어서 보여준다. 두 콘텐츠 타입은 스키마가 달라서
// (글: category/tag/author/readDuration, 프로젝트: description만) 공용 카드 UI가
// 다룰 수 있는 하나의 모양으로 변환한다.
export interface ContentItem {
  id: string;
  type: "post" | "project";
  href: string;
  title: string;
  subTitle: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
  readDuration: number;
  featured: boolean;
}

function postToContentItem(post: PostMeta): ContentItem {
  return {
    id: post.id,
    type: "post",
    href: `/post/${post.id}`,
    title: post.title,
    subTitle: post.subTitle,
    author: post.author,
    date: post.date,
    category: post.category,
    thumbnail: post.thumbnail,
    readDuration: post.readDuration,
    featured: post.featured,
  };
}

function projectToContentItem(project: ProjectMeta): ContentItem {
  return {
    id: project.id,
    type: "project",
    href: `/projects/${project.id}`,
    title: project.title,
    subTitle: project.description,
    author: "",
    date: project.date,
    category: "",
    thumbnail: project.thumbnail,
    readDuration: 0,
    featured: project.featured,
  };
}

function sortByDateDesc(items: ContentItem[]): ContentItem[] {
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 글 + 프로젝트를 합친 전체 콘텐츠 (분야 상관없이 최신순)
export function loadAllContent(): ContentItem[] {
  return sortByDateDesc([
    ...loadAllPosts().map(postToContentItem),
    ...loadAllProjects().map(projectToContentItem),
  ]);
}

// frontmatter에 featured: true가 붙은 글/프로젝트만 (최신순)
export function loadFeaturedContent(): ContentItem[] {
  return loadAllContent().filter((item) => item.featured);
}

// "From the blog"처럼 글만 필요한 곳에서 공용 카드 UI에 맞춰 변환할 때 사용
export function postsToContentItems(posts: PostMeta[]): ContentItem[] {
  return posts.map(postToContentItem);
}
