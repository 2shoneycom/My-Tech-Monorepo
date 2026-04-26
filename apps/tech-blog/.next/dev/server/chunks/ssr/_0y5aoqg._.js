module.exports = [
"[project]/apps/tech-blog/src/data/dummyPosts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyPosts",
    ()=>dummyPosts
]);
const monoRepoImg1 = "/images/monorepo_1.png";
const clipPathImg1 = "/images/clip-path_1.png";
const infixToPrefixImg1 = "/images/infix_to_prefix_1.png";
const vanilaCSSvsFrameworkImg1 = "/images/vanilacss_vs_framework_1.png";
const vanilaCSSvsFrameworkImg2 = "/images/vanilacss_vs_framework_2.png";
const graphImg1 = "/images/graph_1.png";
const graphImg2 = "/images/graph_2.png";
const graphImg3 = "/images/graph_3.png";
const graphImg4 = "/images/graph_4.png";
const graphImg5 = "/images/graph_5.png";
const viteImg1 = "/images/vite_1.png";
const viteImg2 = "/images/vite_2.png";
const dummyPosts = [
    // Vite가 뭐길래
    {
        id: "Vite가 뭐길래",
        category: "Developments",
        tag: [
            "Web",
            "Frontend",
            "React",
            "DevTool"
        ],
        title: "Vite가 뭐길래",
        subTitle: "리액트는 CRA가 근본인줄 알고 사용하고 있었는데..",
        author: "Sean Lee",
        date: "April 18, 2026",
        readDuration: 10,
        thumbnail: viteImg2,
        content: `
      <p>리액트로 작업 중에 뜬금없이 이런 에러가 떴다. </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${viteImg1}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                CRA 사용중 의존성 문제 발생
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        그동안 자바스크립트로 작업해오다가 타입스크립트를 도입했는데 타입스크립트와 react-scripts가 서로 버전호환이 안된다는 것이다. 정확히는 react-scripts가 타입스크립트의 최신 버전을 따라가지 못한다는 말이었다.
      </p>
      <br>
      <h2>
        <p>react-scripts는 무엇인가?</p>
      </h2>
      <p>
        react-scripts는 CRA(Create React App) 시스템의 총책임자다. CRA는 사용자가 복잡한 설정을 신경쓰지 않게 하려고, 빌드에 필요한 모든 도구(Webpack, Babel, ESLint 등)를 react-scripts라는 하나의 패키지 안에 다 집어넣었다. 흔히 개발 서버를 실행하기 위해 npm start를 칠 때, react-scripts가 내부의 Webpack을 깨워 서버를 돌리고 코드를 변환한다.
      </p>
      <p>
        위에서 나온 오류는 그런 react-scripts가 최신 타입스크립트 버전인 typescript@6.0.2는 지원할 수 없다고 에러를 낸 것이다. 
      </p>
      <br>
      <h2>
        <p>CRA는 오래된 도구이다</p>
      </h2>
      <p>
        리액트를 만든 페이스북의 오픈소스 팀에의해 개발된 Create React App(CRA)는 2016년 7월 공개되었다. CRA는 출시 당시 리액트 개발의 진입장벽을 낮추는 혁신적인 도구였다. 이전에는 리액트 프로젝트를 시작하려면 Webpack, Babel, 테스트 도구 등을 일일이 설정해야했으나 CRA는 단 한 번의 명령어로 리액트 프로젝트를 시작할 수 있게끔 만들었다.
      </p>
      <p>
        그러나 CRA는 한계를 맞이했다. 사용자에게 편리함을 주기위해 Webpack, Babel 등 수많은 도구를 한 번에 담고 있었던 react-scripts는 내부 도구 중 하나만 업데이트되어도 전체 시스템과의 호환성을 검토해야했다. 이 과정이 너무 무거워지기 시작한 것이다. 여기에 더해, 유연성이 부족하다는 한계점도 존재했다. 사용자가 설정을 조금만 바꾸려고 해도 eject를 통해 모든 설정을 밖으로 꺼내야했고, 한 번 꺼내면 CRA의 편리한 업데이트 혜택을 받을 수 없었다.
      </p>
      <p>
        때마침 차세대 도구들이 등장했다. Vite 같은 도구들은 브라우저의 최신 기능(Native ESM)과 초고속 엔진(esbuild)을 사용하여 Webpack 기반인 CRA보다 수십 배 빠른 속도를 보여주었다. 또한 리액트 팀은 단순한 UI 라이브러리, 클라이언트 사이드 렌더링에서 벗어나 서버 사이드 렌더링이나 서버 컴포넌트 같은 기능을 강조하기 시작했다. 하지만 CRA는 클라이언트 사이드 렌더링에만 초점이 맞춰져있어 한계가 있었고 자연스럽게 Next.js나 Remix 같은 프레임워크가 떠올랐다.
      </p>
      <p>
        <b>너무 무겁고, 너무 느리고, 최신 리액트의 방향성과 맞지 않은</b> CRA는 그렇게 2022년 4월 사실상 마지막 안정화 버전인 react-scripts@5.0.1을 마지막으로 업데이트가 중단되었으며, 2023년 초부터 리액트 공식 문서에서 "새 프로젝트를 시작할 때 CRA를 사용하라"는 문구는 삭제되었고, 대신 Next.js나 Remix같은 프레임워크를 권장하기 시작하며 은퇴를 맞이했다. 
      </p>
      <br>
      <h2>
        <p>CRA의 완벽한 대체제 Vite</p>
      </h2>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${viteImg2}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                Vite와 창시자 에반 유
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        Vite(비트)는 Vue.js의 창시자, 에반 유(Evan You)에 의해 개발되어 2020년 4월에 공개되었으며 프랑스어로 빠르다를 의미한다. 기존 Webpack 기반의 개발 환경이 프로젝트가 커질수록 너무 느려지는 것에 불만이었던 그는 브라우저의 최신 기능인 Native ESM을 활용해 "파일이 수천 개여도 즉시 뜨는 개발 서버"를 목표로 Vite롤 만들었다.
      </p>
      <p>
        Vite는 react-scripts 패키지 하나 안에 모든 것을 담은 CRA와는 다르게 <b>가벼운 코어엔진</b>에 필요한 기능을 플러그인으로 끼워 맞추는 조립식 구조를 가진다. Vite는 플러그인 기반이며 CRA의 react-scripts가 수행하던 "리액트 코드 해석" 역할은 Vite에서 @vitejs/plugin-react라는 별도의 플러그인이 담당한다.
      </p>
      <table>
        <tr>
          <th>기능</th><td>CRA(react-scripts)</td><td>Vite</td>
        </tr>
        <tr>
          <th>핵심 엔진</th><td>Webpack (번들러)</td><td>Vite Core (개발 서버 및 빌드 파이프라인 제어)</td>
        </tr>
        <tr>
          <th>컴파일러</th><td>Babel (JS/JSX 변환)</td><td>esbuild (초고속 변환 엔진)</td>
        </tr>
        <tr>
          <th>React 지원</th><td>내장됨 (설정 변경 불가)</td><td>@vitejs/plugin-react (공식 플러그인)</td>
        </tr>
        <tr>
          <th>프로덕션 빌드</th><td>Webpack</td><td>Rollup (최적화된 배포용 빌드)</td>
        </tr>
      </table>
      <br>
      <p>
        Vite가 CRA보다 압도적인 빠른 속도를 자랑하는 이유에는 둘이 사용하는 엔진의 차이점에 있다. CRA가 사용하는 Webpack 엔진은 서버를 띄울 때 모든 파일을 다 읽어야 한다. 반면에 Vite는 esbuild라는 초고속 엔진과 브라우저의 Native ESM을 사용하여 일단 서버부터 띄우고, 브라우저가 요청하는 파일만 그때그때 변환해서 던져주므로 프로젝트 크기의 상관없이 일관되게 빠른 속도를 보여준다.
      </p>
      <br>
      <h2>
        <p>CRA, 이제는 놓아줄 때</p>
      </h2>
      <p>
        리액트를 처음 시작할 때 Node.js를 설치하고 npx create-react-app으로 리액트 프로젝트를 생성하는 것이라고 배웠고 그게 근본이라고 생각하고 여태까지 사용해왔었다. 하지만 이제는 여러가지 이유에서 CRA를 만든 사람들 조차 CRA는 사용하지말라고 권고할 정도이니 이제는 CRA를 놓아주고 Vite 또는 Next를 사용해 볼 생각이다.
      </p>
    `
    },
    /*
  {
    id: "에라토스테네스의 체",
    category: "Algorithm",
    tag: ["Math", "Prime Number"],
    title: "에라토스테네스의 체",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "그리디",
    category: "Algorithm",
    tag: ["Greedy"],
    title: "그리디",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "이진 탐색",
    category: "Algorithm",
    tag: ["Binary Search"],
    title: "이진 탐색",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "Heap의 기본",
    category: "Algorithm",
    tag: ["Data Structure", "Heap"],
    title: "Heap의 기본",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "Stack의 기본",
    category: "Algorithm",
    tag: ["Data Structure", "Stack"],
    title: "Stack의 기본",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "DP(Bottom-up)",
    category: "Algorithm",
    tag: ["Dynamic Programming"],
    title: "DP(Bottom-up)",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "DP(Top-down)",
    category: "Algorithm",
    tag: ["Dynamic Programming"],
    title: "DP(Top-down)",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "그래프의 탐색(BFS, DFS)",
    category: "Algorithm",
    tag: ["Graph"],
    title: "그래프의 탐색(BFS, DFS)",
    subTitle: "",
    author: "Sean Lee",
  },*/ // 그래프의 구현
    {
        id: "그래프의 구현",
        category: "Algorithm",
        tag: [
            "Graph"
        ],
        title: "그래프의 구현",
        subTitle: "가장 널리 쓰이는 자료구조이자 알고리즘, 그래프의 개념과 구현 방법을 알아보자",
        author: "Sean Lee",
        date: "March 22, 2026",
        readDuration: 8,
        thumbnail: graphImg1,
        content: `
      <p>
        그래프는 데이터를 나타내는 하나의 방법, 자료구조 중 하나이다. 이 자료구조의 특징은 <b>데이터들의 연결</b>을 나타낸다는 것이다. 네트워크를 생각하면 편할 것 같다. 일상 속에서는 지하철 노선도가 정말 딱 들어맞는 그래프의 예시이다. 
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${graphImg1}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                그래프의 대표적인 예시, 네트워크와 지하철 노선도
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <br>
      <h2>
        <p>그래프를 이루는 것, 그래프의 구성</p>
      </h2>
      <p>
        그래프는 노드(node 또는 vertex)와 간선(edge)으로 구성되어진다. 노드는 데이터가 위치한 지점 그 자체이고 간선은 해당 노드에서 다른 노드를 가리키는 포인터이다. 이해를 돕기 위해 아래 예시를 보자.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${graphImg2}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                노드와 간선
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        노드1과 간선1이 있다고 하자. 간선1은 노드1으로부터 나오고 노드2를 가리키고 있다면 노드1에서 간선1을 타면 노드2로 갈 수 있는 것이다. 그래서 그래프는 여러 개의 노드와 그 노드들 사이를 서로 연결하고 있는 간선들이 존재하여 전체적으로 네트워크의 형상을 띄고있다.
      </p>
      <br>
      <h2>
        <p>그래프의 표현</p>
      </h2>
      <p>
        그래프가 무엇인지는 알았다. 그렇다면 이 그래프를 코드 상으로 어떻게 표현하여 사용할 수 있을까? 크게 두 가지 방법이 있다.
      </p>
      <ol>
        <li>인접 행렬(Adjacency Matrix)</li>
        <li>인접 리스트(Adjacency List)</li>
      </ol>
      <p>
        예시를 통해 알아보자. 먼저 우리가 표현하고 싶은 그래프는 다음과 같다.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${graphImg3}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                그래프 예시
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        위 그래프를 첫 번째 방법, 인접 행렬로 표현하면 다음과 같이 표현할 수 있다. 1은 서로 간선으로 연결되어있음을 뜻하고 0은 연결되지 않았음을 의미한다.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${graphImg4}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                인접 행렬
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        코드로는 다음과 같이 작성할 수 있다. (편의상 a, b, c, d, e를 0, 1, 2, 3, 4로 사용했다)
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>C++</span>
        </div>
        <pre><code>bool edge[5][5];

// a <-> b
edge[0][1] = true;
edge[1][0] = true;
// a <-> c
edge[0][2] = true;
edge[2][0] = true;
// a <-> d
edge[0][3] = true;
edge[3][0] = true;
// b <-> d
edge[1][3] = true;
edge[3][1] = true;
// c <-> e
edge[2][4] = true;
edge[4][2] = true;</code></pre>
      </div>
      <p>
        다음으로, 위의 그래프를 인접 리스트 방식으로 나타내면 다음과 같다.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${graphImg5}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                인접 리스트
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        이를 코드로 표현하면 다음과 같다.
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>C++</span>
        </div>
        <pre><code>vector<int> edge[5];

// a <-> b
edge[0].push_back(1);
edge[1].push_back(0);
// a <-> c
edge[0].push_back(2);
edge[2].push_back(0);
// a <-> d
edge[0].push_back(3);
edge[3].push_back(0);
// b <-> d
edge[1].push_back(3);
edge[3].push_back(1);
// c <-> e
edge[2].push_back(4);
edge[4].push_back(2);</code></pre>
      </div>
      <br>
      <h2>
        <p>
          두 가지 구현 방식의 장단점 비교
        </p>
      </h2>
      <p>
        두 가지 구현 방식(인접 행렬, 인접 리스트)은 장단점이 명확하다. 먼저 인접 행렬의 장단점을 살펴보자.
      </p>
      <p>
        인접 행렬의 장점은 다음과 같다.
      </p>
      <ul>
        <li><b>‘특정 두 노드가 연결되어있는가’를 O(1) 속도로 알아낼 수 있다.</b><br>
        이게 인접 행렬의 가장 강력한 무기이다. 예를 들어, a와 b노드가 연결되어있는가는 단순히 edge[a][b]에 접근하여 단번에 알아낼 수 있다.</li>
        <li><b>사람이 보기에 편하다</b><br>
        이걸 장점으로 보기에는 애매하지만, 사람에게는 장황하게 늘어져 표현된 인접 리스트보다는 인접 행렬이 눈에 더 잘 들어오는 것 같다.</li>
      </ul>
      <p>
        인접 행렬의 단점은 다음과 같다.
      </p>
      <ul>
        <li><b>메모리 낭비</b><br>
        인접 행렬의 가장 큰 단점이다. 인접 행렬은 연결된 정보(1)뿐만 아니라 연결이 안되어있다는 정보(0)까지도 정보 포함하기때문에 무조건 NxN 만큼의 이차원 배열을 필요로 한다. 이것은 심각한 메모리 낭비를 초래한다.</li>
      </ul>
      <p>
        인접 리스트의 장단점을 살펴보자. 인접 리스트의 장단점은 인접 행렬의 정반대이다.
      </p>
      <p>
        인접 리스트의 장점은 다음과 같다.
      </p>
      <ul>
        <li><b>메모리 낭비가 적다.</b><br>
        인접 리스트는 오직 연결된 노드만을 리스트에 추가하기에 인접 행렬에 비해 메모리 낭비가 적다.</li>
        <li><b>한 노드에 연결된 노드들을 전부 탐색하는 것은 인접 리스트가 유리하다.</b><br>
        예를 들어, ‘a에 연결된 노드들을 전부 나열하시오’와 같은 문제는 인접 리스트로 해결하면 그저 edge[a]에 들어있는 내용물을 쭉 출력하면 그만이다. 하지만 인접 행렬같은 경우에는 edge[a][a]~edge[a][e]까지 전부 순회하며 1인지 0인지 확인해야한다. </li>
      </ul>
      <p>
        인접 리스트의 단점은 인접 행렬의 장점을 생각하면 되므로 생략한다.
      </p>
      <br>
      <h2>
        <p>
          결론: 언제 무엇을 사용할까?
        </p>
      </h2>
      <p>
        그래프의 두 가지 구현 방식을 알아보았다. 그렇다면 언제 어떤 구현 방식을 사용하면 좋을까?
      </p>
      <ul>
        <li>그래프의 밀도가 낮은 경우 (간선의 수가 적은 경우)<br>
        -> <b>인접 리스트</b>를 사용하는 것이 유리하다</li>
        <li>그래프의 밀도가 높은 경우 (간선의 수가 많은 경우)<br>
        -> <b>인접 행렬</b>을 사용하는 것이 유리하다</li>
      </ul>
      <p>
        참고로 그래프는 보통 밀도가 낮다고 한다. 
      </p>
    `
    },
    // 바닐라 CSS vs CSS 프레임워크
    {
        id: "바닐라 CSS vs CSS 프레임워크",
        category: "Web",
        tag: [
            "CSS"
        ],
        title: "바닐라 CSS vs CSS 프레임워크",
        subTitle: "순수(Vanilla) CSS와 프레임워크의 대비: 핵심 차이점과 장단점 분석",
        author: "Sean Lee",
        date: "March 14, 2026",
        readDuration: 8,
        thumbnail: vanilaCSSvsFrameworkImg1,
        content: `
      <p>
        웹 페이지를 보기 좋게 만들기 위해 빠질 수 없는 것이 CSS인데 이전에는 CSS를 직접 작성해서 스타일링을 했어야 하는 반면에 현대적인 개발 방법론으로 CSS 프레임워크가 제시되었고 현재는 주류라고 할 수 있을 정도로 CSS 프레임워크는 많은 곳에 사용되고 있는 것 같다. Bootstrap, Tailwind CSS 등 모두 한 번쯤은 들어본 CSS 프레임워크이며 이 말은 곧 CSS 프레임워크가 그만큼 많은 사람들에게 사용되어지고 있다는 것을 의미하기도 한다.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${vanilaCSSvsFrameworkImg1}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                바닐라 CSS, Tailwind CSS, Bootstrap
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <h2>
        <p>CSS 프레임 워크란?</p>
      </h2>
      <p>
        CSS 프레임워크란 웹 디자이너나 개발자가 웹사이트를 더 쉽고 빠르게 구축할 수 있도록 <b>미리 정의된 CSS 스타일, 레이아웃 규칙, 그리고 클래스들의 모음</b>이다. 
      </p>
      <p>
        CSS 프레임워크에는 사용하는 방식에 따라 크게 두 가지 유형으로 나뉜다. 
      </p>
      <ol>
        <li>
          구성 요소 중심(Component-based): 미리 완성된 UI 컴포넌트 제공한다
          <ul>
            <li>예시: Bootstrap, Bulma</li>
          </ul>
        </li>
        <br>
        <li>
          유틸리티 중심(Utility-first): 작은 단위의 스타일 클래스들을 조합해 직접 디자인을 쌓아 올린다
          <ul>
            <li>예시: Tailwind CSS</li>
          </ul>
        </li>
      </ol>
      <br>
      <h2>
        <p>Bootstrap 사용 예시</p>
      </h2>
      <p>
        Bootstrap은 구성 요소 중심의 CSS 프레임워크로써 미리 완성된 UI 컴포넌트를 제공한다. 마치 '버튼은 이렇게 생겨야 해', '모달창은 이런 모양이야'라고 이미 정의된 컴포넌트를 제공하는 것과 같다. Bootstrap의 코드예시는 아래와 같다.
      </p>
      <p>
        <b>버튼</b>
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>Bootstrap</span>
        </div>
        <pre><code>&lt;!-- 파란색 버튼 --&gt;
&lt;button type="button" class="btn btn-primary">저장하기&lt;/button>

&lt;!-- 빨간색 테두리 버튼 -->
&lt;button type="button" class="btn btn-outline-danger">삭제하기&lt;/button>

&lt;!-- 큰 사이즈 노란색 버튼 -->
&lt;button type="button" class="btn btn-warning btn-lg">로그인&lt;/button></code></pre>
      </div>
      <p>
        <b>카드 레이아웃</b>
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>Bootstrap</span>
        </div>
        <pre><code>&lt;div class="card" style="width: 18rem;">
  &lt;img src="https://placeholder.com" class="card-img-top" alt="이미지">
  &lt;div class="card-body">
    &lt;h5 class="card-title">부트스트랩 카드&lt;/h5>
    &lt;p class="card-text">클래스 몇 개만 추가하면 이런 박스 디자인이 뚝딱 완성됩니다.&lt;/p>
    &lt;a href="#" class="btn btn-primary">자세히 보기&lt;/a>
  &lt;/div>
&lt;/div></code></pre>
      </div>
      <br>
      <h2>
        <p>Tailwind CSS 사용 예시</p>
      </h2>
      <p>
        Tailwind CSS는 유틸리티 중심 CSS 프레임워크로써 작은 단위의 스타일 클래스들을 조합해서 직접 디자인을 쌓아 올린다. Tailwind CSS는 '버튼'을 주지 않고, '파란색', '둥근 모서리', '그림자' 같은 원자 단위의 클래스를 제공한다.
      </p>
      <p>
        <b>버튼</b>
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>Tailwind CSS</span>
        </div>
        <pre><code>&lt;!-- 파란색, 둥근 모서리, 글자 흰색, 마우스 올리면(hover) 진해짐 -->
&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
  저장하기
&lt;/button>

&lt;!-- 테두리만 있는 빨간색 버튼 -->
&lt;button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
  삭제하기
&lt;/button></code></pre>
      </div>
      <p>
        <b>카드 레이아웃</b>
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>Tailwind CSS</span>
        </div>
        <pre><code>&lt;div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
  &lt;img class="w-full" src="https://placeholder.com" alt="이미지">
  &lt;div class="px-6 py-4">
    &lt;div class="font-bold text-xl mb-2">테일윈드 카드&lt;/div>
    &lt;p class="text-gray-700 text-base">
      클래스가 좀 길어 보이죠? 하지만 CSS 파일을 따로 열지 않고 여기서 모든 디자인을 끝낼 수 있습니다.
    &lt;/p>
  &lt;/div>
  &lt;div class="px-6 pt-4 pb-2">
    &lt;button class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">자세히 보기&lt;/button>
  &lt;/div>
&lt;/div></code></pre>
      </div>
      <br>
      <h2>
        <p>CSS 프레임워크 사용의 장단점 정리</p>
      </h2>
      <p>
        그렇다면 CSS 프레임워크를 사용하는 것이 무조건 좋은 것인가? CSS 프레임워크를 사용하는 데에 있어 장단점과 프레임워크별 자유도의 정도 차이를 알아보자.
      </p>
      <p>
        <b>주요 장점</b>
      </p>
      <ul>
        <li><b>개발 속도 향상</b><br>
        버튼, 내비게이션 바, 카드 등 자주 쓰이는 UI 구성 요소가 이미 디자인되어 있어 가져다 쓰기만 하면 된다.</li>
        <li><b>반응형 디자인 지원</b><br>
        복잡한 화면 레이아웃(그리드 시스템)을 기본으로 제공하여 모바일, 태블릿, PC 등 다양한 기기에서 화면이 자동으로 조절되도록 돕는다.</li>
        <li><b>일관성 유지</b><br>
        여러 개발자가 협업할 때 정해진 클래스 명칭과 규칙을 사용하므로 전체적인 디자인 스타일이 통일된다.</li>
      </ul>
      <p>
        <b>단점(고려해야할 점)</b>
      </p>
      <ul>
        <li><b>학습 비용</b><br>
        프레임워크마다 고유한 클래스 명칭이나 사용법을 새로 익혀야 한다.</li>
        <li><b>디자인의 유사성</b><br>
        부트스트랩 같은 프레임워크를 그대로 사용하면 웹사이트들이 서로 비슷해 보일 수 있다.</li>
        <li><b>무거운 파일 크기</b><br>
        사용하지 않는 스타일까지 포함되어 웹페이지 로딩 속도에 영향을 줄 수 있다.</li>
      </ul>
      <p>
        추가적으로 나는 CSS 프레임워크의 사용에 대하여 다음과 같은 의문점이 떠올랐다. "CSS 프레임워크를 사용하면 Vanila CSS를 사용하는 것 만큼의 자유도를 얻기 어려운가?". Vanila CSS를 사용하면 개발자가 0부터 100까지 말그대로 CSS를 직접 작성하는 것이기 때문에 당연히 CSS의 사용률을 100%까지 끌어올릴 수 있다. 반면 CSS 프레임워크는 CSS를 바탕으로 재구성된 2차 가공품이다. 그러면 CSS 프레임워크의 사용만으로는 CSS의 사용률을 100%까지 끌어올릴 수는 없는 것일까?
      </p>
      <p>
        이에 관해 조사해본 결과, 정답은 <b>"CSS 프레임워크마다 다르다"</b>이다. 현대 웹 개발에서 가장 널리 사용되는 CSS 프레임워크 두 가지, Bootstrap과 Tailwind CSS를 놓고 이야기 해보자.
      </p>
      <p>
        앞서 말했듯이 Bootstrap은 컴포넌트 기반으로 동작한다. 즉, 이미 만들어진 완성품을 주기 때문에 Bootstrap은 그 자유도가 상대적으로 낮다. 자잘한 커스터마이징(색상 변경, 크기 조절)은 가능하지만, 뼈대가 워낙 견고해서 대충 만들면 일명 Bootstrap-look이 강하게 나타난다. 또한 Bootstrap은 태생적으로 '규격화된 틀'을 제공하는 것이 목적이기 때문에, 아무리 숙련된 Bootstrap 전문가라도 Vanila CSS 만큼의 완전한 자유도를 누리기는 구조적으로 어렵다. 
      </p>
      <p>
        반면, 완성품을 제공해주는 Bootstrap과 다르게 Tailwind CSS는 '재료'를 제공한다. 그렇기에 자유도가 Vanila CSS를 사용하는 것과 거의 동일하다고 할 수 있다. 이론적으로는 Vanila CSS가 0.1% 더 자유롭지만(완전 새로운 속성 정의 등), 실무에서는 Tailwind CSS 프레임워크가 제공하는 수치만으로도 99% 이상의 디자인을 구현할 수 있다.
      </p>
      <br>
      <h2>
        <p>번외: MUI (리액트 UI 라이브러리)</p>
      </h2>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${vanilaCSSvsFrameworkImg2}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                MUI (리액트 전용 UI 라이브러리)
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        엄밀히 말하면 CSS 프레임워크는 아니지만, 비슷한 용도로 사용되는 MUI(구: Material UI)가 있다. MUI는 엄밀히 말해 CSS 프레임워크라기보다 'UI 컴포넌트 라이브러리'이다. 주요한 특징은 다음과 같다.
      </p>
      <ul>
        <li><b>컴포넌트 단위</b>
        단순히 디자인(CSS)만 주는 게 아니라, 클릭하면 열리는 메뉴, 입력창의 애니메이션 등 기능(JS)이 포함된 완성된 부품을 통째로 가져다 쓴다.</li>
        <li><b>React 전용</b>
        MUI는 리액트 환경에서만 돌아간다.</li>
        <li><b>구글의 디자인 철학</b>
        구글이 만든 'Material Design' 가이드를 코드로 구현해 놓은 것이라서 특유의 "구글스러운" 느낌이 강하게 박혀 있다.</li>
      </ul>
    `
    },
    // 중위 표기식을 후위 표기식으로 변경하기
    {
        id: "중위 표기식을 후위 표기식으로 변경하기",
        category: "Algorithm",
        tag: [
            "Stack",
            "String"
        ],
        title: "중위 표기식을 후위 표기식으로 변경하기",
        subTitle: "스택 자료구조를 활용하여 중위 표기식을 후위 표기식으로 변경하는 방법",
        author: "Sean Lee",
        date: "March 6, 2026",
        readDuration: 8,
        thumbnail: infixToPrefixImg1,
        content: `
      <p>
        중위 표기식이란 사람이 가장 익숙하게 사용하는 방식으로 연산자가 피연산자 가운데에 위치한다. 후위 표기식은 연산자가 피연산자 뒤에 위치하는 식으로 컴퓨터에게 있어서, 스택 구조를 이용해 왼쪽부터 순서대로 계산할 수 있어 매우 효율적이라는 점이 특징이다.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${infixToPrefixImg1}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                중위 표기식과 후위 표기식
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        중위 표기식을 후위 표기식으로 변환하기 위해서는 보통 스택이라는 자료구조를 사용한다. 
      </p>
      <h2>
        <p>변환 규칙</p>
      </h2>
      <p>
        구체적으로 중위 표기식을 후위 표기식으로 변환하는 규칙은 다음과 같다.
      </p>
      <ol>
        <li><b>피연산자 (숫자 or 문자)</b><br>
        피연산자를 만나면 스택을 거치지 않고 즉시 출력한다
        </li>
        <li><b>여는 괄호 '('</b><br>
        여는 괄호는 무조건 스택에 push 한다
        </li>
        <li><b>닫는 괄호 ')'</b><br>
        여는 괄호 '('를 만날 때까지 스택 내의 모든 연산자를 pop 하여 출력한다.
        </li>
        <li><b>그 외 연산자 +, -, *, /</b><br>
        스택의 top과 현재 연산자의 우선순위를 비교한다.<br>
          <ol>
            <li>스택의 top > 현재 연산자 -> top은 pop하고 출력, 현재 연산자는 push</li>
            <li>스택의 top <= 현재 연산자 -> 현재 연산자를 push만</li>  
          </ol>
        </li>
      </ol>
      <br>
      <h2>
        <p>왜 이런 규칙이 가능한가?</p>
      </h2>
      <p>
        상기된 규칙이 모든 상황에서 통하는 이유는 후위 표기식을 실행하는 방식에 있다. 후위 표기식을 통해 계산을 하는 과정 자체는 매우 간단한 규칙을 따른다. 바로 <b>'연산자를 만나면 앞의 피연산자 2개를 가지고 연산을 행한다'</b>이다. 
      </p>
      <p>
        그렇다면 자연스럽게 후위 표기식에서의 <b>연산자의 등장 순서는 곧 연산자의 실행 순서</b>이다. 다시 말해 후위 표기식에서의 연산자는 중위 표기식에서의 연산자 우선 순위에 맞게 나열되어 있어야 한다.
      </p>
      <p>
        예시를 통해 살펴보자. 다음은 중위 표기식의 한 예이다.
      </p>
      <ul>
        2 * (3 + 8 / 4) - 5
      </ul>
      <p>
        먼저, 위의 식에서 사용된 연산자를 분석해보자. 사용된 연산자는 앞에서부터 * + / - 이다. 이를 피연산자와 함께 써보면 다음과 같다.
      </p>
      <ul>
        <li>2 * 뒷내용</li>
        <li>3 + 뒷내용</li>
        <li>8 / 4</li>
        <li>앞내용 - 5</li>
      </ul>
      <p>
        이 4개의 연산자를 연산자 우선 순위를 고려한 실행 순서대로 다시 작성하면 다음과 같다.
      </p>
      <ol>
        <li>8 / 4</li>
        <li>3 + 뒷내용</li>
        <li>2 * 뒷내용</li>
        <li>앞내용 - 5</li>
      </ol>
      <p>
        앞서 말했듯이 후위 표기식에서의 연산자 등장 순서는 중위 표기식에서의 연산자 우선 순위와 동일해야 한다. 위 예시에서 첫 번째 연산자( '/' )는 후위 표기식에서 모든 연산자 중 가장 첫 번째로 등장해야한다. 다른 말로, 위의 순서대로 연산자가 나타나야 한다. 즉, 후위 표기식에서 연산자만큼은 다음의 순서로 나타나야 한다.
      </p>
      <ul>
        / + * -
      </ul>
      <p>
        주어진 사실들을 바탕으로 앞선 예시를 후위 표기식으로 차례 차례 조합하면 다음과 같다.
      </p>
      <ol>
        <li>8 4 /</li>
        <li>3 8 4 / +</li>
        <li>2 3 8 4 / + *</li>
        <li>2 3 8 4 / + * 5 -</li>
      </ol>
      <p>
        여태까지의 분석 내용과 기존의 변환 규칙을 비교해보면 왜 해당 규칙이 모든 상황에서 만족하는 지 이해가 된다.
      </p>
    `
    },
    // clip-path 내용 정리
    {
        id: "clip-path 내용 정리",
        category: "Web",
        tag: [
            "CSS"
        ],
        title: "clip-path 내용 정리",
        subTitle: "요소를 자르는 효과를 구현하는 CSS의 clip-path 내용 정리",
        author: "Sean Lee",
        date: "March 3, 2026",
        readDuration: 5,
        thumbnail: clipPathImg1,
        content: `
      <p>
        별다른 일을 수행하지 않으면 HTML 요소의 기본적인 모양은 직사각형이다. 하지만 실제 웹사이트에서는 원, 마름모, 육각형, 그 외 여러 다양한 모양의 요소들이 필요할 때가 있다. 이럴때 clip-path 속성을 사용하면 된다.
      </p>
      <h2>
        <p>기본 문법 및 사용 예시</p>
      </h2>
      <p>
        clip-path 속성의 기본적인 사용방법은 다음과 같다.
      </p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>CSS</span>
        </div>
        <pre><code>/* 예시 */
clip-path: circle(40%);
clip-path: ellipse(130px 140px at 10% 20%);
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
clip-path: path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z");
clip-path: rect(5px 145px 160px 5px round 20%);
clip-path: xywh(0 5px 100% 75% round 15% 0);</code></pre>
      </div>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${clipPathImg1}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                위의 코드의 실행 결과
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    `
    },
    // 모노레포: 프로젝트 모듈화 관리 방법
    {
        id: "모노레포: 프로젝트 모듈화 관리 방법",
        category: "Developments",
        tag: [
            "Project Management",
            "Git",
            "Repository"
        ],
        title: "모노레포: 프로젝트 모듈화 관리 방법",
        subTitle: "프로젝트 진행 시, 모듈화 된 컴포넌트를 관리하기 위한 최적의 방법 모노레포를 소개한다",
        author: "Sean Lee",
        date: "Feburary 27, 2026",
        readDuration: 10,
        thumbnail: monoRepoImg1,
        content: `
      <p>
        웹, 게임, 어플리케이션 등 모든 프로젝트에서 모듈화는 중요하다. 다름 아닌 '재사용성'때문이다. 내가 1번 프로젝트를 진행하며 만든 <헤더> 컴포넌트가 그대로 혹은 조금만 바꿔서 2번 프로젝트에서 쓰일 수 있을 것 같다면, 그때 모듈화는 빛을 발한다. 
      </p>
      <p>
        하지만 막상 프로젝트를 진행할 때 모듈화된 컴포넌트를 어떻게 관리해야할 지 막막한 경우가 있다. 
        이번 글에서는 직접 몸으로 부딪히고 여러 시행착오를 겪으며 배운 것을 공유하고 그 결과로 배운 모노레포(Monorepo) 관리 방법에 대해 소개한다.
      </p>
      <h2>
        <p>그냥 모듈별로 레포지토리를 만들면 되지 않을까?</p>
      </h2>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=${monoRepoImg1}>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                모듈 컴포넌트 각각마다 레포지토리가 생성된 모습
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>
        내가 처음 사용한 방법이다. 웹 페이지 프로젝트를 진행하는 동안 만들어진 컴포넌트(e.g. 헤더, 네비게이터, 슬라이더 등)를 만들어진대로 깃허브와 연동하여 레포지토리를 생성하였다.
      </p>
      <p>
        그랬더니 내가 느낀 불편한 점은 다음과 같았다.
      </p>
      <ul class="rte2-style-ul">
        <li><b>레포지토리가 너무 많아진다.</b><br> 
        큰 컴포넌트든, 작은 컴포넌트든 모듈화가 이뤄지는 족족 레포지토리가 생성되니 오히려 관리하기가 어려울 정도로 그 수가 많아진다.</li>
        <li><b>업데이트 내용이 실시간으로 반영되지 않는다.</b><br>
        결국 개별 프로젝트를 관리하는 것처럼 동작하기 때문에 수정이 일어날때마다 매번 사용된 프로젝트에 가서 복사/붙여넣기를 실행해야한다.
        </li>
      </ul>
      <br>
      <h2>
        <p>해결책: 모노레포(Monorepo)</p>
      </h2>
      <p>
       모노레포(Monorepo)는 'Monolithic Repository'의 줄임말로, 두 개 이상의 독립적인 프로젝트 코드와 자산을 단일 버전 관리 저장소에 모아서 관리하는 소프트웨어 개발 전략이다. 쉽게 말해, 프론트엔드 앱, 백엔드 서버, 공통 UI 컴포넌트 라이브러리 등 여러 개의 개별 프로젝트를 각각의 레포지토리에 쪼개지 않고 거대한 폴더 하나(단일 레포지토리) 안에 다 같이 담아두고 운영하는 방식이다.
      </p>
      <p>
        구조는 다음과 같다.
      </p>
      <p style="padding-left: 50px;">
      My-Workspace (최상위 폴더)<br>
      ├── package.json (workspaces 설정)<br>
      ├── apps<br>
      │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Tech-Blog (메인 블로그)<br>
      │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Portfolio (포트폴리오 사이트)<br>
      └── packages (공통 모듈들)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── header-ui (헤더 모듈)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── section-ui (섹션 모듈)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── shared-ui (Carousel 등 공통 컴포넌트)<br>
      <br>
      </p>
      <p>
        위의 예에서는 My-Workspace라는 최상위 폴더를 기준으로 단 1개의 레포지토리만 생성하고 그 안에 여러개의 프로젝트와 사용되는 모듈들이 동시에 관리되는 것이다. 이렇게 하면 기존의 단점들을 모두 해결 가능하다.
      </p>
      <p>
        이외에도 모노레포의 주요 장점은 다음과 같다.
      </p>
      <ul class="rte2-style-ul">
        <li><b>쉬운 코드 공유 및 재사용:</b> 여러 프로젝트가 한곳에 있으므로, 공통 모듈(예: 디자인 시스템, 유틸리티 함수)을 분리하여 다른 프로젝트에서 쉽게 import 해서 쓸 수 있다.</li>
        <li><b>원자적 커밋:</b> 공통 컴포넌트에 변경 사항이 생겼을 때, 해당 컴포넌트를 사용하는 A 앱과 B 앱의 코드도 한 번의 커밋으로 동시에 수정하고 테스트할 수 있다.</li>
        <li><b>의존성 관리의 단순화:</b> 모든 프로젝트가 단일 진실 공급원(Single Source of Truth)을 공유하므로, 패키지 버전 파편화나 충돌을 방지하기 좋습니다.</li>
        <li><b>일관된 개발 환경:</b> 모든 프로젝트가 동일한 린터(ESLint), 포매터(Prettier), 빌드 설정, CI/CD 파이프라인을 공유하기 쉽습니다.</li>
      </ul>
      <br>
      <h2>
        <p>모노레포 구축 방법</p>
      </h2>
    `
    }
];
}),
"[project]/packages/header-type-a/src/css/header_typeA.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "NavigationGroup": "header_typeA-module__dpvu-q__NavigationGroup",
  "NavigationGroup-items-item": "header_typeA-module__dpvu-q__NavigationGroup-items-item",
  "NavigationGroup_items": "header_typeA-module__dpvu-q__NavigationGroup_items",
  "NavigationGroup_items_item": "header_typeA-module__dpvu-q__NavigationGroup_items_item",
  "NavigationItem": "header_typeA-module__dpvu-q__NavigationItem",
  "NavigationItem_items": "header_typeA-module__dpvu-q__NavigationItem_items",
  "NavigationItem_items_item": "header_typeA-module__dpvu-q__NavigationItem_items_item",
  "NavigationItem_more": "header_typeA-module__dpvu-q__NavigationItem_more",
  "NavigationItem_text": "header_typeA-module__dpvu-q__NavigationItem_text",
  "NavigationItem_text_link": "header_typeA-module__dpvu-q__NavigationItem_text_link",
  "NavigationLink": "header_typeA-module__dpvu-q__NavigationLink",
  "NavigationLink_icon": "header_typeA-module__dpvu-q__NavigationLink_icon",
  "burger_menu_icon": "header_typeA-module__dpvu-q__burger_menu_icon",
  "close_menu_icon": "header_typeA-module__dpvu-q__close_menu_icon",
  "combinator_header_hamburger": "header_typeA-module__dpvu-q__combinator_header_hamburger",
  "flex_container": "header_typeA-module__dpvu-q__flex_container",
  "hamburger_menu_trigger": "header_typeA-module__dpvu-q__hamburger_menu_trigger",
  "hamburger_outer_box": "header_typeA-module__dpvu-q__hamburger_outer_box",
  "header-hidden": "header_typeA-module__dpvu-q__header-hidden",
  "header_logo": "header_typeA-module__dpvu-q__header_logo",
  "header_navigator": "header_typeA-module__dpvu-q__header_navigator",
  "header_navigator_item": "header_typeA-module__dpvu-q__header_navigator_item",
  "inner_box": "header_typeA-module__dpvu-q__inner_box",
  "open": "header_typeA-module__dpvu-q__open",
  "outer_box": "header_typeA-module__dpvu-q__outer_box",
});
}),
"[project]/packages/header-type-a/src/customHooks/useSmartHeader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const SCROLL_THRESHOLD = 0;
function useSmartHeader() {
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 70;
        // header-height variable value setting
        if (headerRef.current) {
            headerRef.current.style.setProperty('--header-height', `${headerHeight}px`);
        }
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            // --- SCROLL DOWN LOGIC ---
            // If scrolling down AND past the header height, hide it.
            if (currentScrollY > lastScrollY.current && currentScrollY > headerHeight) {
                if (!isHidden) {
                    setIsHidden(true);
                }
            } else if (currentScrollY < lastScrollY.current - SCROLL_THRESHOLD) {
                if (isHidden) {
                    setIsHidden(false);
                }
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, [
        isHidden
    ]);
    return {
        isHidden,
        headerRef
    };
}
const __TURBOPACK__default__export__ = useSmartHeader;
}),
"[project]/packages/header-type-a/src/css/hamburger.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Navigation": "hamburger-module___FdKmG__Navigation",
  "NavigationBackLink": "hamburger-module___FdKmG__NavigationBackLink",
  "NavigationGroup": "hamburger-module___FdKmG__NavigationGroup",
  "NavigationGroup_items": "hamburger-module___FdKmG__NavigationGroup_items",
  "NavigationGroup_items_item": "hamburger-module___FdKmG__NavigationGroup_items_item",
  "NavigationItem": "hamburger-module___FdKmG__NavigationItem",
  "NavigationItem_items": "hamburger-module___FdKmG__NavigationItem_items",
  "NavigationItem_items_item": "hamburger-module___FdKmG__NavigationItem_items_item",
  "NavigationItem_more": "hamburger-module___FdKmG__NavigationItem_more",
  "NavigationItem_text": "hamburger-module___FdKmG__NavigationItem_text",
  "NavigationLink": "hamburger-module___FdKmG__NavigationLink",
  "NavigationLink_icon": "hamburger-module___FdKmG__NavigationLink_icon",
  "Navigation_items": "hamburger-module___FdKmG__Navigation_items",
  "Navigation_items_item": "hamburger-module___FdKmG__Navigation_items_item",
  "Page_header_hamburger_menu": "hamburger-module___FdKmG__Page_header_hamburger_menu",
  "Page_header_hamburger_menu_content": "hamburger-module___FdKmG__Page_header_hamburger_menu_content",
  "Page_header_socialBar": "hamburger-module___FdKmG__Page_header_socialBar",
  "SocialBar": "hamburger-module___FdKmG__SocialBar",
  "SocialBar_heading": "hamburger-module___FdKmG__SocialBar_heading",
  "SocialBar_items": "hamburger-module___FdKmG__SocialBar_items",
  "SocialBar_items_item": "hamburger-module___FdKmG__SocialBar_items_item",
  "SocialLink": "hamburger-module___FdKmG__SocialLink",
  "hamburger_hidden": "hamburger-module___FdKmG__hamburger_hidden",
  "hamburger_navigatior": "hamburger-module___FdKmG__hamburger_navigatior",
  "hamburger_navigatior_item": "hamburger-module___FdKmG__hamburger_navigatior_item",
  "hamburger_navigator_text": "hamburger-module___FdKmG__hamburger_navigator_text",
  "hamburger_outer_box": "hamburger-module___FdKmG__hamburger_outer_box",
  "sr_only": "hamburger-module___FdKmG__sr_only",
  "submenuOpened": "hamburger-module___FdKmG__submenuOpened",
});
}),
"[project]/packages/header-type-a/src/components/Hamburger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/css/hamburger.module.css [app-ssr] (css module)");
;
;
;
;
function Hamburger({ menuItems, subMenuItems, socialItems, subTitles, isMenuOpen }) {
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hamburgerRef.current) {
            hamburgerRef.current.style.setProperty('--hamburger-width', `${hamburgerRef.current.offsetWidth}px`);
        }
    }, [
        isMenuOpen
    ]);
    let hamburgerClass = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Page_header_hamburger_menu;
    if (!isMenuOpen) {
        hamburgerClass = `${hamburgerClass} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hamburger_hidden}`;
    }
    // 몇 번째 하위 메뉴가 열렸는지
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleMenu = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hamburgerRef,
        className: hamburgerClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Page_header_hamburger_menu_wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Page_header_hamburger_menu_content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Navigation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Navigation_items,
                            children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Navigation_items_item,
                                    children: subMenuItems[index] != null ? // 하위 메뉴가 있으면
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: index === openIndex ? `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submenuOpened} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem}` : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                        href: "#",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 41,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_more,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleMenu(index),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                id: "chevron-right",
                                                                viewBox: "0 0 10 10",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M2.21339 1.27619C1.92497 0.985111 1.92497 0.515512 2.21339 0.224432C2.50555 -0.0701113 2.98183 -0.0702133 3.27393 0.224432L8.0005 4.99396L7.99464 5.0008L8.0005 5.00568L3.27393 9.77521C2.98177 10.0701 2.50558 10.07 2.21339 9.77521C1.92497 9.48414 1.92497 9.01551 2.21339 8.72443L5.90284 5.0008L2.21339 1.27619Z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 50,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                lineNumber: 49,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                            lineNumber: 48,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 47,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 40,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_items,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_items_item,
                                                        "data-back-link": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationBackLink,
                                                            onClick: ()=>toggleMenu(index),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    id: "chevron-left",
                                                                    viewBox: "0 0 10 18",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9.7214 17.7246C9.34994 18.0918 8.74767 18.0918 8.37621 17.7246L0.278598 9.71952C-0.0928661 9.3523 -0.0928661 8.75692 0.278598 8.3897C0.650063 8.02248 1.25233 8.02248 1.62379 8.3897L9.7214 16.3948C10.0929 16.762 10.0929 17.3574 9.7214 17.7246Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                            lineNumber: 65,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9.7214 0.275414C9.34994 -0.0918045 8.74767 -0.0918045 8.37621 0.275414L0.278598 8.28048C-0.0928661 8.6477 -0.0928661 9.24308 0.278598 9.6103C0.650063 9.97752 1.25233 9.97752 1.62379 9.6103L9.7214 1.60523C10.0929 1.23801 10.0929 0.642633 9.7214 0.275414Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                            lineNumber: 66,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 64,
                                                                    columnNumber: 29
                                                                }, this),
                                                                item
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                            lineNumber: 60,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 58,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_items_item,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationGroup,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                                    children: subTitles[index]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 76,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationGroup_items,
                                                                    children: subMenuItems[index].map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationGroup_items_item,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                                                href: `/${item}/${subItem.title}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationLink_icon,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Image,
                                                                                                dataimagesize: "smallIcon",
                                                                                                alt: `${subItem.title}_icon`,
                                                                                                src: subItem.icon
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                                lineNumber: 90,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                            lineNumber: 89,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                        lineNumber: 88,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    subItem.title
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                lineNumber: 84,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, subIndex, false, {
                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                            lineNumber: 82,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 79,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                            lineNumber: 74,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 72,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 56,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                        lineNumber: 38,
                                        columnNumber: 21
                                    }, this) : // 하위메뉴가 없으면
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                href: `/${item}`,
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                            lineNumber: 105,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this)
                                }, item, false, {
                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Page_header_socialBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar_heading,
                                    children: "Social"
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar_items,
                                    children: socialItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar_items_item,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialLink,
                                                href: item.url,
                                                children: [
                                                    item.svg,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sr_only,
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Hamburger;
}),
"[project]/packages/header-type-a/src/Header_typeA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/css/header_typeA.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$customHooks$2f$useSmartHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/customHooks/useSmartHeader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$components$2f$Hamburger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/components/Hamburger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function Header_typeA({ logoImg, menuItems, subMenuItems, subTitles, socialItems }) {
    /* [Hamburger Menu] */ const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    /* [Smart Header System] */ const { isHidden, headerRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$customHooks$2f$useSmartHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    let headerClass = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].outer_box;
    if (isHidden) {
        headerClass = `${headerClass} ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][`header-hidden`]}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: headerRef,
        className: headerClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner_box,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flex_container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hamburger_menu_trigger} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].open : ''}`,
                            onClick: toggleMenu,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].burger_menu_icon,
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].close_menu_icon,
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header_logo,
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoImg,
                                alt: "seans' tech blog"
                            }, void 0, false, {
                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header_navigator,
                            children: menuItems.map((item, index)=>{
                                // 하위 메뉴가 있을 때
                                if (subMenuItems[index] != null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                    lineNumber: 65,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_more,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            id: "chevron_nav_dropdown",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 8 8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6.97951 1.7706C7.21235 1.53988 7.58746 1.53993 7.82033 1.7706C8.05623 2.00435 8.05623 2.38548 7.82033 2.61923L4.0049 6.40048L4.00001 6.3956L3.99611 6.40048L0.179702 2.61923C-0.0560031 2.38552 -0.055986 2.00431 0.179702 1.7706C0.412507 1.53992 0.787647 1.54003 1.02052 1.7706L4.00001 4.72177L6.97951 1.7706Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                lineNumber: 71,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                            lineNumber: 70,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                    lineNumber: 68,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_items,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_items_item,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                            children: subTitles[index]
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                            lineNumber: 81,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationGroup_items,
                                                            children: subMenuItems[index].map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationGroup_items_item,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                                        href: `/${item}/${subItem.title}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationLink_icon,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Image,
                                                                                        dataimagesize: "smallIcon",
                                                                                        alt: `${subItem.title}_icon`,
                                                                                        src: subItem.icon
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                                        lineNumber: 93,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                                    lineNumber: 92,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                                lineNumber: 91,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            subItem.title
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                        lineNumber: 87,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, subItem.id, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                    lineNumber: 86,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                            lineNumber: 84,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                    lineNumber: 79,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                lineNumber: 78,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                            lineNumber: 77,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, this);
                                else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                            href: `/${item}`.toLocaleLowerCase(),
                                            children: item
                                        }, index, false, {
                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                            lineNumber: 110,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                        lineNumber: 109,
                                        columnNumber: 21
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 108,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$components$2f$Hamburger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                menuItems: menuItems,
                subMenuItems: subMenuItems,
                socialItems: socialItems,
                subTitles: subTitles,
                isMenuOpen: isMenuOpen
            }, void 0, false, {
                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Header_typeA;
}),
"[project]/packages/header-type-a/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$Header_typeA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/Header_typeA.js [app-ssr] (ecmascript)");
;
}),
"[project]/packages/hero-static-type-b/src/css/hero_typeB.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "HeadingLeadC_body": "hero_typeB-module__KOJFiq__HeadingLeadC_body",
  "HeadingLeadC_category": "hero_typeB-module__KOJFiq__HeadingLeadC_category",
  "HeadingLeadC_description": "hero_typeB-module__KOJFiq__HeadingLeadC_description",
  "HeadingLeadC_meida": "hero_typeB-module__KOJFiq__HeadingLeadC_meida",
  "HeadingLeadC_text": "hero_typeB-module__KOJFiq__HeadingLeadC_text",
  "HeadingLeadC_title": "hero_typeB-module__KOJFiq__HeadingLeadC_title",
  "HedingLeadC": "hero_typeB-module__KOJFiq__HedingLeadC",
  "Image": "hero_typeB-module__KOJFiq__Image",
});
}),
"[project]/packages/hero-static-type-b/src/Hero_typeB.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/hero-static-type-b/src/css/hero_typeB.module.css [app-ssr] (css module)");
;
;
function Hero_typeB({ img, category, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Page_pageLead,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HedingLeadC,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HeadingLeadC_body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HeadingLeadC_meida,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Image,
                                dataImageSize: "hexagonMedium",
                                alt: "AutomatedReasoning.svg",
                                width: "326",
                                height: "282",
                                src: img || "https://assets.amazon.science/b3/e6/339a287646308dd0cf27be64860a/automatedreasoning.svg"
                            }, void 0, false, {
                                fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                                lineNumber: 11,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HeadingLeadC_text,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HeadingLeadC_category,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                    children: category
                                }, void 0, false, {
                                    fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HeadingLeadC_title,
                                children: title || "Automated resoning"
                            }, void 0, false, {
                                fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$css$2f$hero_typeB$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].HeadingLeadC_description,
                                children: description || "Focusing on the automation of formal logical reasoning to raise the bar on the security, durability, availability, and quality of Amazon’s products and services."
                            }, void 0, false, {
                                fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/hero-static-type-b/src/Hero_typeB.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Hero_typeB;
}),
"[project]/packages/hero-static-type-b/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$Hero_typeB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/hero-static-type-b/src/Hero_typeB.js [app-ssr] (ecmascript)");
;
}),
"[project]/packages/section-publications/src/css/publications.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Link": "publications-module__Duh33G__Link",
  "PromoF": "publications-module__Duh33G__PromoF",
  "PromoF_authors": "publications-module__Duh33G__PromoF_authors",
  "PromoF_body": "publications-module__Duh33G__PromoF_body",
  "PromoF_category": "publications-module__Duh33G__PromoF_category",
  "PromoF_content": "publications-module__Duh33G__PromoF_content",
  "PromoF_description": "publications-module__Duh33G__PromoF_description",
  "PromoF_details": "publications-module__Duh33G__PromoF_details",
  "PromoF_journal": "publications-module__Duh33G__PromoF_journal",
  "PromoF_title": "publications-module__Duh33G__PromoF_title",
  "body": "publications-module__Duh33G__body",
  "body_items": "publications-module__Duh33G__body_items",
  "body_items_item": "publications-module__Duh33G__body_items_item",
  "header": "publications-module__Duh33G__header",
  "header_button": "publications-module__Duh33G__header_button",
  "header_wrapper": "publications-module__Duh33G__header_wrapper",
  "nextPage": "publications-module__Duh33G__nextPage",
  "top_contianer": "publications-module__Duh33G__top_contianer",
});
}),
"[project]/packages/section-publications/src/Publications.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/section-publications/src/css/publications.module.css [app-ssr] (css module)");
;
;
;
function Publications({ data = [], loadNext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].top_contianer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header_wrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: "Publications"
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header_button,
                        href: "/Article Search",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/section-publications/src/Publications.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body_items,
                        children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body_items_item,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_title,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                                href: `/post/${item.title}`,
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                                lineNumber: 18,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_details,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_authors,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                                        href: `/author/${item.author}`,
                                                        children: item.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                        lineNumber: 22,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/section-publications/src/Publications.js",
                                                    lineNumber: 21,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_date,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/section-publications/src/Publications.js",
                                                    lineNumber: 25,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_content,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_body,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_description,
                                                        children: [
                                                            item.subTitle,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "...",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                                                        href: `/post/${item.title}`,
                                                                        children: "Read more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                                        lineNumber: 32,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                                                lineNumber: 31,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                        lineNumber: 29,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoF_category,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                                            href: `/Blog/${item.category}`,
                                                            children: item.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                                            lineNumber: 36,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                        lineNumber: 35,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/section-publications/src/Publications.js",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextPage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                            onClick: loadNext,
                            href: "#",
                            children: "Load more"
                        }, void 0, false, {
                            fileName: "[project]/packages/section-publications/src/Publications.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/section-publications/src/Publications.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/section-publications/src/Publications.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Publications;
}),
"[project]/packages/section-publications/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$Publications$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/section-publications/src/Publications.js [app-ssr] (ecmascript)");
;
}),
"[project]/packages/footer-type-a/src/css/footerA.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "FooterNavigation": "footerA-module__U_UGfq__FooterNavigation",
  "FooterNavigation_items_item": "footerA-module__U_UGfq__FooterNavigation_items_item",
  "NavigationItem": "footerA-module__U_UGfq__NavigationItem",
  "NavigationItem_text": "footerA-module__U_UGfq__NavigationItem_text",
  "PromoNewsletter_body": "footerA-module__U_UGfq__PromoNewsletter_body",
  "PromoNewsletter_content": "footerA-module__U_UGfq__PromoNewsletter_content",
  "PromoNewsletter_description": "footerA-module__U_UGfq__PromoNewsletter_description",
  "PromoNewsletter_media": "footerA-module__U_UGfq__PromoNewsletter_media",
  "PromoNewsletter_title": "footerA-module__U_UGfq__PromoNewsletter_title",
  "SocialBar_heading": "footerA-module__U_UGfq__SocialBar_heading",
  "SocialBar_items": "footerA-module__U_UGfq__SocialBar_items",
  "SocialBar_items_item": "footerA-module__U_UGfq__SocialBar_items_item",
  "SocialLink": "footerA-module__U_UGfq__SocialLink",
  "footer": "footerA-module__U_UGfq__footer",
  "footer_body": "footerA-module__U_UGfq__footer_body",
  "footer_bottom": "footerA-module__U_UGfq__footer_bottom",
  "footer_bottom_content": "footerA-module__U_UGfq__footer_bottom_content",
  "footer_column": "footerA-module__U_UGfq__footer_column",
  "footer_columns": "footerA-module__U_UGfq__footer_columns",
  "footer_content": "footerA-module__U_UGfq__footer_content",
  "footer_disclaimer": "footerA-module__U_UGfq__footer_disclaimer",
  "footer_logo": "footerA-module__U_UGfq__footer_logo",
  "footer_social": "footerA-module__U_UGfq__footer_social",
  "sr_only": "footerA-module__U_UGfq__sr_only",
});
}),
"[project]/packages/footer-type-a/src/Footer_typeA.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/css/footerA.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
;
function Footer_typeA({ logoImg, socialItems }) {
    const footerMenuItems = [
        "About",
        "Research areas",
        "Blog",
        "Publications",
        "Conferences",
        "Code and datasets",
        "Academia",
        "Amazon News",
        "Amazon Developer",
        "Amazon Web Services",
        "Awards and recognitions",
        "Newsletter",
        "Careers",
        "FAQs"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_logo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoImg,
                                alt: "sean's tech blog",
                                width: "171",
                                height: "29"
                            }, void 0, false, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_columns,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_column,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_navigation,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].FooterNavigation,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].FooterNavigation_items,
                                            children: footerMenuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].FooterNavigation_items_item,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                                href: "/",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                lineNumber: 27,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                            lineNumber: 26,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                        lineNumber: 25,
                                                        columnNumber: 23
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 24,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_column,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_content,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter_content,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter_media,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Image,
                                                            "data-image-size": "hexagonXSmall",
                                                            alt: "View from space of a connected network around planet Earth representing the Internet of Things.",
                                                            width: "70",
                                                            height: "61",
                                                            src: "https://assets.amazon.science/dims4/default/edd567d/2147483647/strip/true/crop/1465x1277+227+0/resize/70x61!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F20%2Fc4%2Fc36de9f643dab18e2f27ea071590%2Famazon-science-newsletter-project-kuiper.jpg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                            lineNumber: 43,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter_body,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter_text,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter_title,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "Link",
                                                                    href: "/",
                                                                    children: "Get more from Sean's Tech Blog"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                    lineNumber: 49,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                lineNumber: 48,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].PromoNewsletter_description,
                                                                children: "Subscribe to our monthly newsletter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                lineNumber: 53,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_bottom,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_bottom_content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_disclaimer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                        href: "/",
                                        target: "_blank",
                                        children: "Amazon.com"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    " | ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                        href: "/",
                                        target: "_blank",
                                        children: "Conditions of Use"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    " | ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].Link,
                                        href: "/",
                                        target: "_blank",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    " | © 1996-2026 Amazon.com, Inc. or its affiliates"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer_social,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar_heading,
                                        children: "Social"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar_items,
                                        children: socialItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialBar_items_item,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].SocialLink,
                                                    href: item.url,
                                                    target: "_blank",
                                                    children: [
                                                        item.svg,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sr_only,
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Footer_typeA;
}),
"[project]/packages/footer-type-a/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$Footer_typeA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/Footer_typeA.js [app-ssr] (ecmascript)");
;
}),
"[project]/apps/tech-blog/src/data/categoryData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const researchAreaData = [
    {
        id: "Web",
        icon: "/images/web_icon.png",
        title: "Web",
        description: "웹 프로젝트를 진행하며 연구한 프론트엔드/백엔드를 아우르는 전반적인 웹 지식 및 경험을 기술합니다.",
        link: "/Blog/Web"
    },
    {
        id: "Algorithm",
        icon: "/images/algorithm_icon.png",
        title: "Algorithm",
        description: "효율적인 문제 해결을 위한 알고리즘 설계와 복잡도 분석 기록입니다.",
        link: "/Blog/Algorithm"
    },
    {
        id: "Developments",
        icon: "/images/developments_icon.png",
        title: "Developments",
        description: "모노레포 관리, 버전 관리 등 소프트웨어 공학적 접근법을 다룹니다.",
        link: "/Blog/Developments"
    }
];
const extraCategoryData = [
    {
        id: "Projects",
        icon: "/images/essay_icon.png",
        title: "Projects",
        description: "프로젝트를 통해 배운 것들을 정리합니다",
        link: "/Projects"
    },
    {
        id: "Essay",
        icon: "/images/essay_icon.png",
        title: "Essay",
        description: "개발 이야기를 다루는 공간입니다",
        link: "/Essay"
    }
];
const __TURBOPACK__default__export__ = {
    researchAreaData,
    extraCategoryData
};
}),
"[project]/apps/tech-blog/src/data/headerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/categoryData.js [app-ssr] (ecmascript)");
;
const menuItems = [
    "Article Search",
    "Blog",
    "Projects",
    "Essay"
];
const subMenuItems = [
    null,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].researchAreaData,
    null,
    null
];
const subTitles = [
    null,
    "Research areas",
    null,
    null
];
const __TURBOPACK__default__export__ = {
    logoImg: "/images/logo.png",
    logoSvg: "/svg/logo.svg",
    menuItems,
    subMenuItems,
    subTitles
};
}),
"[project]/apps/tech-blog/src/data/footerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const socialItems = [
    {
        id: "youtube",
        name: "youtube",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "mono-icon-youtube",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6 c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5 c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107 C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z"
                }, void 0, false, {
                    fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/tech-blog/src/data/footerData.js",
            lineNumber: 5,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0)),
        url: "https://www.youtube.com"
    },
    {
        id: "linkedin",
        name: "linkedin",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "mono-icon-linkedin",
            viewBox: "0 0 16 17",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.734 16.125H.464V5.613h3.27zM2.117 4.172c-.515 0-.96-.188-1.336-.563A1.825 1.825 0 0 1 .22 2.273c0-.515.187-.96.562-1.335.375-.375.82-.563 1.336-.563.516 0 .961.188 1.336.563.375.375.563.82.563 1.335 0 .516-.188.961-.563 1.336-.375.375-.82.563-1.336.563zM15.969 16.125h-3.27v-5.133c0-.844-.07-1.453-.21-1.828-.259-.633-.762-.95-1.512-.95s-1.278.282-1.582.845c-.235.421-.352 1.043-.352 1.863v5.203H5.809V5.613h3.128v1.442h.036c.234-.469.609-.856 1.125-1.16.562-.375 1.218-.563 1.968-.563 1.524 0 2.59.48 3.2 1.441.468.774.703 1.97.703 3.586v5.766z"
                }, void 0, false, {
                    fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/tech-blog/src/data/footerData.js",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0)),
        url: "https://www.linkedin.com/in/sean-lee-547000361/"
    },
    {
        id: "github",
        name: "github",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "mono-icon-github",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.99926333,0 C3.58218484,0 0,3.58169373 0,8.00024556 C0,11.5347924 2.29202861,14.5330428 5.47100893,15.5909021 C5.87126677,15.6645692 6.0171276,15.4175389 6.0171276,15.2053777 C6.0171276,15.0158077 6.010252,14.512416 6.00632309,13.8449922 C3.78108598,14.3282483 3.31158108,12.7723994 3.31158108,12.7723994 C2.94766567,11.848123 2.42315602,11.602075 2.42315602,11.602075 C1.69679855,11.1060499 2.47816078,11.1158722 2.47816078,11.1158722 C3.28113202,11.1723503 3.70348998,11.9404524 3.70348998,11.9404524 C4.41707849,13.162835 5.57610731,12.8097241 6.03186101,12.6049296 C6.10454587,12.0882777 6.31130483,11.7356579 6.5396728,11.5357746 C4.76331379,11.3339268 2.8956076,10.6473495 2.8956076,7.58181651 C2.8956076,6.70861598 3.20746493,5.99404524 3.71920562,5.43515762 C3.63669849,5.23281869 3.36216581,4.41904294 3.79778385,3.31796556 C3.79778385,3.31796556 4.46913656,3.10285767 5.99748304,4.13812579 C6.63544001,3.96034255 7.32005279,3.87194205 8.00024556,3.86850425 C8.67994721,3.87194205 9.36406888,3.96034255 10.0030081,4.13812579 C11.5303723,3.10285767 12.2007428,3.31796556 12.2007428,3.31796556 C12.6373431,4.41904294 12.3628104,5.23281869 12.2807944,5.43515762 C12.7935173,5.99404524 13.1029191,6.70861598 13.1029191,7.58181651 C13.1029191,10.6552073 11.2322662,11.3314712 9.45050493,11.5293901 C9.73731545,11.7764204 9.99318579,12.2645876 9.99318579,13.0110808 C9.99318579,14.0802357 9.98336352,14.9431229 9.98336352,15.2053777 C9.98336352,15.4195034 10.127751,15.6684981 10.5334111,15.590411 C13.7099358,14.5300961 16,11.5338101 16,8.00024556 C16,3.58169373 12.4178152,0 7.99926333,0",
                id: "icon-Github"
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/tech-blog/src/data/footerData.js",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0)),
        url: "https://github.com/2shoneycom"
    }
];
const __TURBOPACK__default__export__ = {
    logoImg: "/images/logo.png",
    socialItems
};
}),
"[project]/apps/tech-blog/app/essay/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../_css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$dummyPosts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/dummyPosts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$Header_typeA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/Header_typeA.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/hero-static-type-b/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$Hero_typeB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/hero-static-type-b/src/Hero_typeB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/section-publications/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$Publications$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/section-publications/src/Publications.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$Footer_typeA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/Footer_typeA.js [app-ssr] (ecmascript)");
// 데이터 로드
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/headerData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/categoryData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/footerData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function SubCategory({ fixedCategory }) {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const category = fixedCategory === undefined ? params.category : fixedCategory;
    const heroContents = fixedCategory === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].researchAreaData : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extraCategoryData;
    // 현재 URL 파라미터와 일치하는 Hero 콘텐츠 찾기
    const currentHero = heroContents.find((item)=>item.id.toLowerCase() === category.toLowerCase()) || heroContents[0];
    // 게시글 목록 필터링 (현재 카테고리와 일치하는 글만 추리기)
    const filteredPublications = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$dummyPosts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dummyPosts"].filter((post)=>post.category.toLowerCase() === category.toLocaleLowerCase());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: styles.top_container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$Header_typeA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                logoImg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].logoImg,
                menuItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].menuItems,
                subMenuItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].subMenuItems,
                subTitles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].subTitles,
                socialItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].socialItems
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/essay/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$static$2d$type$2d$b$2f$src$2f$Hero_typeB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                img: currentHero.icon,
                category: fixedCategory === null ? "Research Area" : null,
                title: currentHero.title,
                description: currentHero.description
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/essay/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$Publications$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: filteredPublications
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/essay/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$Footer_typeA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                logoImg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].logoImg,
                socialItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].socialItems
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/essay/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/tech-blog/app/essay/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = SubCategory;
}),
];

//# sourceMappingURL=_0y5aoqg._.js.map