import monoRepoImg1 from '../assets/images/monorepo_1.png';
import clipPathImg1 from '../assets/images/clip-path_1.png';
import infixToPrefixImg1 from '../assets/images/infix_to_prefix_1.png';
import vanilaCSSvsFrameworkImg1 from '../assets/images/vanilacss_vs_framework_1.png';
import vanilaCSSvsFrameworkImg2 from '../assets/images/vanilacss_vs_framework_2.jpeg';
import graphImg1 from '../assets/images/graph_1.png';
import graphImg2 from '../assets/images/graph_2.png';
import graphImg3 from '../assets/images/graph_3.png';
import graphImg4 from '../assets/images/graph_4.png';
import graphImg5 from '../assets/images/graph_5.png';

export const dummyPosts = [
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
  },*/
  // 그래프의 구현
  {
    id: "그래프의 구현",
    category: "Algorithm",
    tag: ["Graph"],
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
    tag: ["CSS"],
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
    tag: ["Stack", "String"],
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
    tag: ["CSS"],
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
    tag: ["Project Management", "Git", "Repository"],
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
    `,
  },
  // Customizing multiturn AI agents with reinforcement learning
  {
    id: "Customizing multiturn AI agents with reinforcement learning",
    category: "Conversational AI",
    title: "Customizing multiturn AI agents with reinforcement learning",
    subTitle: "Leveraging existing environment simulators and reward functions based on verifiable ground truth boosts task success rate, even with small models and small training datasets.",
    author: "Sean Lee",
    date: "January 13, 2026",
    readDuration: 7,
    thumbnail: "https://assets.amazon.science/dims4/default/7ed69ad/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg",
    content: `
      <p>In today's rapidly evolving AI landscape, organizations increasingly need AI agents that excel in specific domains and business environments. While general-purpose AI systems demonstrate impressive capabilities across broad tasks, they often fall short when deployed in specialized contexts that require deep understanding of particular workflows, tools, and organizational needs.</p>
      <p>In recent work, scientists with Amazon Web Services’ AI Labs have been investigating how to efficiently adapt general-purpose agents to specific domains without requiring extensive expertise in machine learning or prohibitive computational resources. Through systematic experimentation across two distinct use cases — personal-assistant agents and agentic retrieval-augmented generation (<a class="Link" href="https://www.amazon.science/tag/retrieval-augmented-generation-rag" data-cms-ai="0">RAG</a>) — we've demonstrated that reinforcement-learning-based customization can significantly boost task success rates across diverse use cases, even with relatively small amounts of training data.<br></p>
      <h2><p>Experimental framework and assumptions</p></h2>
      <p>Consider a customer service agent that needs to navigate complex internal systems, understand company-specific policies, and maintain consistent brand voice across thousands of interactions. Or imagine a coding assistant that must adapt to a particular organization's coding standards, architectural patterns, and development workflows. These scenarios demand more than off-the-shelf AI solutions: they require agents that can be systematically customized and optimized for their intended environments. Our work explores the use of reinforcement learning (RL) to customize such agents.</p>
      <p>To establish a practical foundation for our experiments, we made several simplifying assumptions. We focused primarily on asynchronous multiturn agents that can autonomously complete tasks using tools, with results verifiable against ground truth. This approach reduces our dependency on simulated users while maintaining a framework applicable to many scenarios.</p>
      <p>Additionally, we leveraged existing environment and tool simulators from public benchmark datasets and agents, allowing us to focus on the core RL methodology rather than building simulation infrastructure from scratch. For reward signals, we rely on verifiable feedback available directly from the environment, such as task completion rates, code execution success, or information retrieval accuracy. These constraints provide the minimal conditions needed to begin our experimentation while keeping our scenarios realistic.<br></p>
      <h2><p>Experimental design</p></h2>
      <p>For our experiments involving a personal-assistant agent, we used the AppWorld benchmark, which involves the completion of day-to-day activities through phone app interactions. For the agentic-RAG experiments, we implemented a DeepSearch Agent for intelligent information retrieval and synthesis, using two different datasets. For the reward functions, we relied on verifiable environment-based feedback for AppWorld and exact match and semantic accuracy for RAG tasks.</p>
      <p>Our RL training framework has two main components: an online simulator and an online RL trainer. The online simulator takes a batch of tasks and produces a batch of rollout trajectories — sequences of interactions between the agent and its environment, often involving dozens of API calls. It also produces a reward for each trajectory by running checks against ground truth.</p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="Simulator-Trainer-16x9.jpg" srcset="https://assets.amazon.science/dims4/default/46c3005/2147483647/strip/true/crop/1920x1080+0+0/resize/568x320!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 568w,https://assets.amazon.science/dims4/default/43a3d9b/2147483647/strip/true/crop/1920x1080+0+0/resize/768x432!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 768w,https://assets.amazon.science/dims4/default/31ed192/2147483647/strip/true/crop/1920x1080+0+0/resize/1024x576!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 1024w,https://assets.amazon.science/dims4/default/7ed69ad/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 1200w,https://assets.amazon.science/dims4/default/3b7b233/2147483647/strip/true/crop/1920x1080+0+0/resize/1748x983!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 1748w" width="1200" height="675" src="https://assets.amazon.science/dims4/default/7ed69ad/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg">
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                RL-based-training pipeline.
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <p>The online RL trainer takes the rollout trajectories and the reward from the online simulator to update the actor policy. Internally, the online RL trainer has components such as actor, critic (for proximate policy optimization, which approximates the optimal weight that any one training example should be given during policy updates), and reference model. After the actor policy is updated in the online RL trainer, the weights of the actor model are synced to the agent in the online simulator.<br></p>
      <h2><p>RL-based-training pipeline</p></h2>
      <p>Let’s take a closer look at the RL pipeline, using the AppWorld experiments as an example. First, the simulator does a parallel simulation of interactions between agents and the AppWorld environment based on the provided task IDs and produces a batch of rollout trajectories. We’ll consider <a class="Link" href="https://appworld.dev/trajectory.html?task_id=68ee2c9_2" target="_blank" data-cms-ai="0">one such trajectory</a>, which demonstrates how an agent systematically decomposes a high-level instruction — "add date prefixes to files and move non-current year files to recycle bin" — into a sequence of 32 discrete API calls across multiple applications and reasoning steps.</p>
      <p><b>Acknowledgments: </b>Lin Lee Cheong</p>
    `,
  },
];