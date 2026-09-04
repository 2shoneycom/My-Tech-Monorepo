import styles from "../../_css/blogPost.module.css";

import Header from "@sean/header-type-a";
import ArticlePage from "@sean/articlePage-main";
import Footer from "@sean/footer-type-a";
import { getPostById, loadAllPosts, type Post } from "../../../src/api/posts";

// 데이터 로드
import headerData from "../../../src/data/headerData";
import footerData from "../../../src/data/footerData";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 빌드 시 모든 게시글 경로를 정적 생성한다 (SSG)
export function generateStaticParams() {
  return loadAllPosts().map((post) => ({ id: post.id }));
}

async function BlogPost({ params }: PageProps) {
  const { id } = await params;

  let postData: Post | null = null;
  try {
    postData = await getPostById(id);
  } catch (err) {
    console.error("게시글 로드 실패:", (err as Error).message);
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
      {!postData
        ? <h2>Something went wrong</h2>
        : <ArticlePage
          article_category={postData.category}
          article_headLine={postData.title}
          article_subHeadLine={postData.subTitle}
          article_author={postData.author}
          article_date={postData.date}
          article_readDuration={postData.readDuration}
          article_content={postData.content}
          article_tags={postData.tag}
        />
      }
      <Footer
        logoImg={footerData.logoImg}
        socialItems={footerData.socialItems}
      />
    </div>
  );
}

export default BlogPost;
