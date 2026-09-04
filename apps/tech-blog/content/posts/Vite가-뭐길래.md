---
id: Vite가 뭐길래
category: Developments
tag:
  - Web
  - Frontend
  - React
  - DevTool
title: Vite가 뭐길래
subTitle: 리액트는 CRA가 근본인줄 알고 사용하고 있었는데..
author: Sean Lee
date: 'April 18, 2026'
readDuration: 10
thumbnail: /images/vite_2.png
---
<p>리액트로 작업 중에 뜬금없이 이런 에러가 떴다. </p>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=/images/vite_1.png>
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
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=/images/vite_2.png>
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
