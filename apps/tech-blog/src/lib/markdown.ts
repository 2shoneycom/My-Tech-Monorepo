import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

// 블로그 포스트/프로젝트 모두에서 공유하는 본문 렌더링 규칙.
// 이미 완성된 HTML(Amazon Science 스타일 CodeBlock/Figure 마크업)로 작성된 글은
// 그대로 통과시키고, 순수 마크다운으로 쓴 글은 remark가 HTML로 변환한다.
export async function renderContent(raw: string): Promise<string> {
  const trimmed = raw.trim();
  const looksLikeHtml = trimmed.startsWith("<");
  if (looksLikeHtml) {
    return trimmed;
  }

  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(raw);
  return processed.toString();
}
