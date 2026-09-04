---
id: 바닐라 CSS vs CSS 프레임워크
category: Web
tag:
  - CSS
title: 바닐라 CSS vs CSS 프레임워크
subTitle: '순수(Vanilla) CSS와 프레임워크의 대비: 핵심 차이점과 장단점 분석'
author: Sean Lee
date: 'March 14, 2026'
readDuration: 8
thumbnail: /images/vanilacss_vs_framework_1.png
---
<p>
        웹 페이지를 보기 좋게 만들기 위해 빠질 수 없는 것이 CSS인데 이전에는 CSS를 직접 작성해서 스타일링을 했어야 하는 반면에 현대적인 개발 방법론으로 CSS 프레임워크가 제시되었고 현재는 주류라고 할 수 있을 정도로 CSS 프레임워크는 많은 곳에 사용되고 있는 것 같다. Bootstrap, Tailwind CSS 등 모두 한 번쯤은 들어본 CSS 프레임워크이며 이 말은 곧 CSS 프레임워크가 그만큼 많은 사람들에게 사용되어지고 있다는 것을 의미하기도 한다.
      </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=/images/vanilacss_vs_framework_1.png>
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
        <pre><code class="code">&lt;!-- 파란색 버튼 --&gt;
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
        <pre><code class="code">&lt;div class="card" style="width: 18rem;">
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
        <pre><code class="code">&lt;!-- 파란색, 둥근 모서리, 글자 흰색, 마우스 올리면(hover) 진해짐 -->
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
        <pre><code class="code">&lt;div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
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
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=/images/vanilacss_vs_framework_2.png>
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
