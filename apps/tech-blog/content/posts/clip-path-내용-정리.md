---
id: clip-path 내용 정리
category: Web
tag:
  - CSS
title: clip-path 내용 정리
subTitle: 요소를 자르는 효과를 구현하는 CSS의 clip-path 내용 정리
author: Sean Lee
date: 'March 3, 2026'
readDuration: 5
thumbnail: /images/clip-path_1.png
---
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
        <pre><code class="code">/* 예시 */
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
                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=/images/clip-path_1.png>
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
