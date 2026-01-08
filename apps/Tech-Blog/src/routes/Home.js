import styles from "../css/home.module.css";
import Header from '@sean/header-type-a';
import HeroSlide from '@sean/hero-slide';
import AreaSection from '@sean/research-area';
import Fromtheblog from '@sean/from-the-blog';

const heroDataSample = [
  {
    id: 1,
    title: "Dialogue Boost: How Amazon is using AI to enhance TV and movie dialogue",
    desc: "New audio-processing technology is making entertainment more accessible for millions of viewers.",
    image: "/images/1764166800383.jpeg", // 이미지 경로
    link: "/post/1" // 'Read more' 버튼 누르면 갈 주소
  },
  {
    id: 2,
    title: "The overthinking problem in AI",
    desc: "Reasoning models can generate seven to 10 times as many tokens as necessary on simple tasks, creating unsustainable costs at scale. Amazon's vision for metacognitive AI could fundamentally shift how models allocate computational resources.",
    image: "/images/1764166800383.jpeg",
    link: "/post/2"
  },
  {
    id: 3,
    title: "Nova Forge: Build your own frontier AI",
    desc: "AGI SVP Rohit Prasad on how to mix your data with Amazon's training data at every stage — deep customization without catastrophic forgetting.",
    image: "/images/1764166800383.jpeg",
    link: "/post/3"
  },
  {
    id: 4,
    title: "Demystifying AI agents",
    desc: "How agentic systems work under the hood — and how AWS’s new AgentCore framework implements their essential components.",
    image: "/images/1764166800383.jpeg",
    link: "/post/3"
  },
  {
    id: 5,
    title: "How Amazon uses AI agents to anticipate and counter cyber threats",
    desc: "Competitive-agent architecture develops security protections at machine speed, reducing weeks of work to hours.",
    image: "/images/1764166800383.jpeg",
    link: "/post/3"
  },
];
const researchAreaDataSample = [
  {
    id: 1,
    title: "Automated reasoning",
    media_source: "https://assets.amazon.science/b3/e6/339a287646308dd0cf27be64860a/automatedreasoning.svg",
    link: "area/1",
  },
  {
    id: 2,
    title: "Cloud and systems",
    media_source: "https://assets.amazon.science/94/b0/94affd2444f7a0d80227106f9211/cloud.svg",
    link: "area/2",
  },
  {
    id: 3,
    title: "Computer vision",
    media_source: "https://assets.amazon.science/9c/02/b5c9fb95439ebf5d4bcaef6fc4cd/computervision.svg",
    link: "area/3",
  },
  {
    id: 4,
    title: "Conversational AI",
    media_source: "https://assets.amazon.science/fe/aa/910fd701416dabb6d3316fe2ec19/conversationalai.svg",
    link: "area/4",
  },
  {
    id: 5,
    title: "Economics",
    media_source: "https://assets.amazon.science/a9/bc/ab88878c4faebca412cbef3b022b/economics.svg",
    link: "area/5",
  },
  {
    id: 6,
    title: "Information and knowledge management",
    media_source: "https://assets.amazon.science/4d/25/9ac984a8444e80d8071730edb6a0/infomanagement.svg",
    link: "area/6",
  },
  {
    id: 7,
    title: "Machine learning",
    media_source: "https://assets.amazon.science/93/06/f6c7a0ae49ec9d9427ce8dde796f/machinelearning.svg",
    link: "area/7",
  },
  {
    id: 8,
    title: "Operations research and optimization",
    media_source: "https://assets.amazon.science/65/a0/8603864b451fbce8ce61f0ca85e7/operations.svg",
    link: "area/8",
  },
  {
    id: 9,
    title: "Quantum technologies",
    media_source: "https://assets.amazon.science/18/56/44f7716948d58dc87d0d1c8ed3bc/quantum-technologies.svg",
    link: "area/9",
  },
  {
    id: 10,
    title: "Robotics",
    media_source: "https://assets.amazon.science/9f/d6/2a081f10407db7bc1a99f17be15d/robotics.svg",
    link: "area/10",
  },
  {
    id: 11,
    title: "Search and information retrieval",
    media_source: "https://assets.amazon.science/0f/8a/4bf8055f47499b18da29af6b95c4/search.svg",
    link: "area/11",
  },
  {
    id: 12,
    title: "Security, privacy, and abuse prevention",
    media_source: "https://assets.amazon.science/35/42/bdaf2a4c4e8d887ffcfdaf03ddee/security.svg",
    link: "area/12",
  },
  {
    id: 13,
    title: "Sustainability",
    media_source: "https://assets.amazon.science/09/1d/d2ef27534875b71e1919bac64520/sustainability.svg",
    link: "area/13",
  },
];
const fromtheblogDataSample = [
  {
    id: 1,
    title: "Dialogue Boost: How Amazon is using AI to enhance TV and movie dialouge",
    date: "December 10, 2025",
    duration: "5 min read",
    description: "New audio-processing technology is making entertainment more accessible for millions of viewers.",
    category: "Conversational AI",
    media_source: "https://assets.amazon.science/dims4/default/2416f34/2147483647/strip/true/crop/1319x740+0+2/resize/535x300!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Fb4%2Fca%2Fb036be414d479118bef24d24e573%2Ftabletwithdialogueboostmenu.jpeg",
    link: "blog/1",
  },
  {
    id: 2,
    title: "Amazon Nova Forge: \"Open training\” paradigm that empowers everyone to build their own frontier AI",
    date: "December 8, 2025",
    duration: "8 min read",
    description: "unknown",
    category: "Conversational AI",
    media_source: "https://assets.amazon.science/dims4/default/134533e/2147483647/strip/true/crop/4096x2289+0+221/resize/340x190!/format/webp/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F53%2F2e%2Fb74300fd451ead164ef018c6cc12%2Frohit-headshot-2025.jpg",
    link: "blog/2",
  },
  {
    id: 3,
    title: "AutoGluon assistant: Zero-code AutoML through multiagent collaboration",
    date: "December 5, 2025",
    duration: "6 min read",
    description: "unknown",
    category: "Machine learning",
    media_source: "https://assets.amazon.science/dims4/default/d592b24/2147483647/strip/true/crop/1920x1073+0+4/resize/340x190!/format/webp/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff3%2F5c%2F7482b7fe4053bb53addf0a1d7505%2Ffigure1-autogluon-16x9.png",
    link: "blog/3",
  },
  {
    id: 4,
    title: "AI-native 6G: From network to intelligence fabrics",
    date: "December 1, 2025",
    duration: "8 min read",
    description: "unknown",
    category: "Cloud and systems",
    media_source: "https://assets.amazon.science/dims4/default/ec18fe6/2147483647/strip/true/crop/1834x1025+64+55/resize/340x190!/format/webp/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F67%2Fca%2Feb90550e4ba4a05fcaa14b9e403a%2F6g-figure.jpg",
    link: "blog/4",
  },
  {
    id: 5,
    title: "UsingLLMs to improve Amazon product listings",
    date: "November 28, 2025",
    duration: "4 min read",
    description: "unknown",
    category: "Conversational AI",
    media_source: "https://assets.amazon.science/dims4/default/b21c6e6/2147483647/strip/true/crop/1920x1073+0+4/resize/340x190!/format/webp/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Fb9%2F09%2F6943746642fcb8385eac3806b68b%2Fcatalog-refresh-16x9.png",
    link: "blog/5",
  },
];

function Home() {
  return (
    <div className={styles.top_container}>
      <Header />
      <HeroSlide data={heroDataSample} />
      <AreaSection data={researchAreaDataSample} />
      <Fromtheblog data={fromtheblogDataSample} />
      <div className={styles.section2_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.footer_area}></div>
    </div>
  );
}

export default Home;