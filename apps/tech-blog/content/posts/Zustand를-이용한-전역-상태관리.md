---
id: Zustand를 이용한 전역 상태관리
category: Web
tag:
  - Frontend
  - React
title: Zustand를 이용한 전역 상태관리
subTitle: Zustand 라이브러리를 이용한 프론트엔드에서의 전역 데이터 상태관리
author: Sean Lee
date: 'June 1, 2026'
readDuration: 10
thumbnail: /images/zustand_vs_props_comparison.png
featured: true
---
<p>프론트엔드 코드 작성 시, 여러 컴포넌트에서 사용되어지는 데이터의 경우 전역적인 측면에서 다루어져야 할 때가 있다. React에서 전역 상태관리를 위한 라이브러리는 Zustand, Redux, Recoil, Jotai 등 여럿 있지만 이 글에서는 Zustand를 다룬다.</p>
      <h2>
        <p>전역 상태관리의 필요성</p>
      </h2>
      <p>홈페이지 화면을 하나를 띄우는데 헤더, 사이드바, 메인 영역에서 로그인한 유저 정보가 필요하다고 가정해보자.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>plain</span>
        </div>
        <pre><code class="code">App → Header → Nav → UserAvatar  (로그인한 유저 정보 필요)
App → Sidebar → MenuItem          (로그인한 유저 정보 필요)
App → MainContent → BookingWidget (로그인한 유저 정보 필요)</code></pre>
      </div>
      <p>이 상황에서 전역 상태관리 없이 props만을 사용하여 정보를 전달한다고 하면 App에서부터 한참을 내려가야 하고 이를 <b>props drilling</b> 문제라고 한다.</p>
      <p>이에 비해 Zustand를 사용하여 전역 상태 관리를 도입하면 계층 상관없이 아무 컴포넌트에서나 꺼내 쓸 수 있다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>plain</span>
        </div>
        <pre><code class="code">[authStore: {user, token}]  ← 중앙 창고

Header → authStore에서 꺼냄
Sidebar → authStore에서 꺼냄  
BookingWidget → authStore에서 꺼냄</code></pre>
      </div>
      <div class="Enhancement" data-align-center=>
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="zustandImg1.png" src=/images/zustand_vs_props_comparison.png>
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">
                props 방식 vs Zustand 방식
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <br>
      <h2>
        <p>코드 살펴보기</p>
      </h2>
      <p>사용자의 인증 정보를 전역 상태로써 관리하는 코드, authStore.ts 를 살펴보자. 코드는 크게 인터페이스와 구현/생성부로 나누어진다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>typescript</span>
        </div>
        <pre><code class="code">[인터페이스부]
interface AuthState {
    // 상태 및 함수(액션)의 형태 정의
    ...
}

[구현/생성부]
export const useAuthStore = create&lt;AuthState>()(
  // AuthState를 구현하면서 동시에 store 인스턴스 생성
  ...
);</code></pre>
      </div>
      <br>
      <h2>
        <p>코드 살펴보기 - 인터페이스부 </p>
      </h2>
      <p>인터페이스부는 우리가 흔히 클래스의 추상화 개념으로 알고있는 인터페이스를 생각하면 맞다. 현재 store 에서 사용될 변수와 함수의 형태를 미리 지정해준다. user, accessToken 같은 상태값의 타입을 지정해주고 setAuth, isAuthenticated 같은 함수의 매개변수/파라미터의 타입을 지정한다.</p>
      <p>한 가지 짚고 넘어가야 할 점은 해당 코드는 일반 Javascript 코드가 아니라는 점이다. Javascript는 타입이 느슨할뿐더러 interface 문법이 존재하지 않는다. 해당 코드는 Typescript 코드이다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>typescript</span>
        </div>
        <pre><code class="code">interface AuthState {
  user: User | null;
  accessToken: string | null;
  ...

  // Actions
  setAuth: (user: User, accessToken: string, refreshToken?: string) => void;
  setTokens: (accessToken: string, refreshToken?: string) => void;
  ...

  // Selectors
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
  ...
}</code></pre>
      </div>
      <p>Store의 함수에는 Action과 Selector 라는 구분 개념이 존재한다. Setter(=Action)와 Getter(=Selector)로 이해하면 쉽다. 추가적으로 Selector는 값을 그대로 반환하는 Getter와는 달리 <b>값의 가공이 가능</b>하다. </p>
      <br>
      <h2>
        <p>코드 살펴보기 - 구현/생성부 </p>
      </h2>
      <p>여기서 Zustand의 create, persist가 본격적으로 사용된다. create는 스토어를 만드는 함수다. 리액트의 useState와 비슷하지만(리렌더링 측면에서), 컴포넌트 밖에서 존재하며 어디서든 사용이 가능하다는 차이가 있다. persist는 미들웨어로써 스토어의 상태를 로컬 스토리지에 자동 저장해주는 역할을 한다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>typescript</span>
        </div>
        <pre><code class="code">export const useAuthStore = create&lt;AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      ...

      /**
       * 인증 정보 설정 — 로그인/회원가입 직후 호출
       */
      setAuth: (user, accessToken, refreshToken) => {
        useBookingFlowStore.getState().reset();
        localStorage.setItem("accessToken", accessToken);
        set((prev) => ({
          user,
          accessToken,
          refreshToken: refreshToken ?? prev.refreshToken,
          error: null,
        }));
      },

      /**
       * 토큰만 갱신 (refresh 응답 처리용) — user 정보는 유지
       */
      setTokens: (accessToken, refreshToken) => {
        localStorage.setItem("accessToken", accessToken);
        set((prev) => ({
          accessToken,
          refreshToken: refreshToken ?? prev.refreshToken,
        }));
      },

      ...

      isAuthenticated: () => !!get().accessToken,
      isAdmin: () => get().user?.role === "ADMIN",
      ...
    }),
    {
      name: "auth-storage",
      // localStorage에 저장할 필드 정의
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);</code></pre>
      </div>
      <p>구현/생성부에서는 앞서 인터페이스에서 정의된 변수, 함수를 실제로 구현한다. 변수의 초기화, 함수의 구현이 진행되고 있음을 확인할 수 있다.</p>
      <br>
      <h2>
        <p>create() 함수와 구독 selector 개념</p>
      </h2>
      <p>create() 함수를 호출하는 순간 클래스 구현 + 인스턴스 생성을 한방에 진행한다. 정리하면 다음과 같다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>typescript</span>
        </div>
        <pre><code class="code">// 클래스 세계라면 이렇게 두 단계인데
class AuthStore implements AuthState { ... }  // 정의
const store = new AuthStore()                  // 생성

// Zustand는 이걸 한 번에
export const useAuthStore = create&lt;AuthState>()( ... )
// AuthState를 구현하면서 동시에 스토어 인스턴스도 만들어버림</code></pre>
      </div>
      <p>또한 create&lt;AuthState>()가 반환하는 건 스토어 객체가 아니라 useAuthStore 함수 그 자체인데 원형을 뜯어보면 다음과 같이 생겼다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>typescript</span>
        </div>
        <pre><code class="code">useAuthStore(selector: (state: AuthState) => T): T
        
function useAuthStore(selector) {
  const state = 현재스토어상태  // { user, accessToken, ... 전부 }
  return selector(state)        // selector가 골라낸 것만 리턴
}</code></pre>
      </div>
      <p>이를 이용해서 사용하고자 하는 state값만 선택해올 수 있고 이를 구독 selector라고 한다. 흔히 selector라고 하면 이 구독 selector를 지칭한다. 이 패턴을 사용하면 스토어 전체를 구독하는 게 아니라 본인이 필요한 값만 구독하므로 해당 값이 변경될 때만 이를 구독하는 컴포넌트의 리렌더링이 일어나므로 성능 최적화를 이끌어내는 패턴이다.</p>
      <div class="CodeBlock">
        <div class="CodeBlock_header">
          <span>typescript</span>
        </div>
        <pre><code class="code">const user = useAuthStore((state) => state.user);</code></pre>
      </div>
