import monoRepoImg1 from '../assets/images/monorepo_1.png';

export const dummyPosts = [
  {
    id: "모노레포: 프로젝트 모듈화 관리 방법",
    category: "Developments",
    tag: ["Project Management", "Git", "Repository"],
    title: "모노레포: 프로젝트 모듈화 관리 방법",
    subTitle: "프로젝트 진행 시, 모듈화 된 컴포넌트를 관리하기 위한 최적의 방법 모노레포를 소개한다",
    author: "Sean Lee",
    date: "Feburary 27, 2026",
    thumbnail: monoRepoImg1,
    readDuration: 10,
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
  {
    id: "Customizing multiturn AI agents with reinforcement learning",
    category: "Conversational AI",
    title: "Customizing multiturn AI agents with reinforcement learning",
    subTitle: "Leveraging existing environment simulators and reward functions based on verifiable ground truth boosts task success rate, even with small models and small training datasets.",
    author: "Sean Lee",
    date: "January 13, 2026",
    readDuration: 7,
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