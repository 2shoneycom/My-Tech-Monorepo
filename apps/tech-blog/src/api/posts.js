import { dummyPosts } from "../data/dummyPosts";

// id로 게시글 가져오기
export const getPostById = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const post = dummyPosts.find((p) => p.id === id);

  if (!post) {
    throw new Error("게시글을 찾을 수 없습니다");
  }

  return post;
};

// 구간별 게시글 로드
export const loadSlicedPosts = async (fromIdx, toIdx) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const slicedPosts = dummyPosts.slice(fromIdx, toIdx);

  return slicedPosts;
};