"use client";

import { useState } from "react";
import Publications from "@sean/section-publications";
import type { ContentItem } from "../../src/api/content";

const PUB_LOAD_AMOUNT = 2;

// 서버 컴포넌트인 페이지가 전체 목록을 이미 불러온 뒤 넘겨주면,
// "더 보기" 클릭에 따라 몇 개까지 보여줄지만 클라이언트에서 관리한다.
// (재조회가 필요 없으므로 예전의 fetch 기반 페이지네이션보다 단순하다)
function PublicationsSection({ posts }: { posts: ContentItem[] }) {
  const [visibleCount, setVisibleCount] = useState(PUB_LOAD_AMOUNT);

  return (
    <Publications
      data={posts.slice(0, visibleCount)}
      loadNext={() => setVisibleCount((prev) => prev + PUB_LOAD_AMOUNT)}
    />
  );
}

export default PublicationsSection;
