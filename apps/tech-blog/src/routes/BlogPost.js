import styles from "../css/blogPost.module.css";

import Header from "@sean/header-type-a";
import ArticlePage from "@sean/articlePage-main";
import Footer from "@sean/footer-type-a";

function BlogPost() {
  // params id 이용해서 해당 게시글을 가져오는 코드
  // 일단은 로컬에서 가져오되, 추후에는 DB를 통해서 가져오도록 연결해보기
  // 예시 데이터
  const postDataSample = {
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
      <div class="Enhancement" data-align-center="">
        <div class="Enhancement-item">
          <figure class="Figure">
            <div class="Figure-media">
              <picture>
                <img class="Image" data-image-size="figureLarge" alt="Simulator-Trainer-16x9.jpg" srcset="https://assets.amazon.science/dims4/default/46c3005/2147483647/strip/true/crop/1920x1080+0+0/resize/568x320!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 568w,https://assets.amazon.science/dims4/default/43a3d9b/2147483647/strip/true/crop/1920x1080+0+0/resize/768x432!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 768w,https://assets.amazon.science/dims4/default/31ed192/2147483647/strip/true/crop/1920x1080+0+0/resize/1024x576!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 1024w,https://assets.amazon.science/dims4/default/7ed69ad/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 1200w,https://assets.amazon.science/dims4/default/3b7b233/2147483647/strip/true/crop/1920x1080+0+0/resize/1748x983!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg 1748w" width="1200" height="675" src="https://assets.amazon.science/dims4/default/7ed69ad/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg">
              </picture>
            </div>
            <div class="Figure-content">
              <figcaption class="Figure-caption">RL-based-training pipeline.
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
  };

  return (
    <div className={styles.top_container}>
      <Header />
      {/* 가져온 글 (제목/정보/내용 등) 연결해주기 */}
      <ArticlePage 
        article_category={postDataSample.category}
        article_headLine={postDataSample.title}
        article_subHeadLine={postDataSample.subTitle}
        article_author={postDataSample.author}
        article_date={postDataSample.date}
        article_readDuration={postDataSample.readDuration}
        article_content={postDataSample.content}
      />
      <Footer />
    </div>
  );
}

export default BlogPost;