import styles from "../css/blogPost.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "@sean/header-type-a";
import ArticlePage from "@sean/articlePage-main";
import Footer from "@sean/footer-type-a";
import { getPostById } from "../api/posts";

function BlogPost() {
  const { id } = useParams();

  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const data = await getPostById(id); // API 호출
        setPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // 1. 로딩 중일 때 보여줄 화면
  if (isLoading) return <div className={styles.top_container}></div>;

  return (
    <div className={styles.top_container}>
      <Header />
      {error || !postData ?
        <h2>Something went wrong</h2>
        :
        <ArticlePage
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
      <Footer />
    </div>
  );
}

export default BlogPost;