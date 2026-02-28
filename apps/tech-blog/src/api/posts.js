import { dummyPosts } from "../data/dummyPosts";

export const getPostById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const post = dummyPosts.find((p) => p.id === id);

  if (!post) {
    throw new Error("게시글을 찾을 수 없습니다");
  }

  return post;
};