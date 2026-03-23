import styles from "../css/home.module.css";
import Header from '@sean/header-type-a';
import HeroSlide from '@sean/hero-slide';
import AreaSection from '@sean/research-area';
import Fromtheblog from '@sean/from-the-blog';
import FeaturedNews from '@sean/featured-news';
import Publications from '@sean/section-publications';
import Footer from '@sean/footer-type-a';

// 데이터 로드
import headerData from "../data/headerData";
import footerData from "../data/footerData";
import categoryData from "../data/categoryData";
import { dummyPosts } from "../data/dummyPosts";

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
const featuredNewsDataSample = [
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
];
const PublicationsDataSample = [
  {
    id: 1,
    title: "CausalFusion: Integrating LLMs and graph falsification for causal discovery",
    description: "Causal discovery is central to enable causal models for tasks such as effect estimation, counterfactual reasoning, and root cause attribution. Yet existing approaches face trade-offs: purely statistical methods (e.g., PC, LiNGAM) often return structures that overlook domain knowledge, while expert-designed DAGs are difficult to scale and",
    date: 2026,
    category: "Conversational AI",
    link: "blog/1",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 2,
    title: "Beyond grey-box assumptions: Uncertainty-guided example selection for black-box language models",
    description: "In-context learning (ICL) with Large Language Models has been historically effective, but performance depends heavily on demonstration quality while annotation budgets remain constrained. Existing uncertainty-based selection methods like Cover-ICL achieve strong performance through logit-based uncertainty estimation, but most",
    date: 2026,
    category: "Conversational AI",
    link: "blog/2",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 3,
    title: "Temporal-consistent video restoration with pre-trained diffusion models",
    description: "Video restoration (VR) aims to recover high-quality videos from degraded ones. Although recent zero-shot VR methods using pre-trained diffusion models (DMs) show good promise, they suffer from approximation errors during reverse diffusion and insufficient temporal consistency. Moreover, dealing with 3D video data, VR is inherently",
    date: 2026,
    category: "Computer vision",
    link: "blog/3",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 4,
    title: "Domain-specific LLM adaptation: Bridging personalization and efficiency through synthetic data and optimization",
    description: "Large Language Models (LLMs) have demonstrated exceptional capabilities but face two critical deployment challenges: high computational costs and scarcity of personalized domain training data. We address these dual challenges through a comprehensive framework that combines synthetic data generation with inference optimization",
    date: 2026,
    category: "Conversational AI",
    link: "blog/4",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 5,
    title: "Neural codec language model for controllable timbre transfer in music synthesis",
    description: "Large Language Models (LLMs) have demonstrated exceptional capabilities but face two critical deployment challenges: high computational costs and scarcity of personalized domain training data. We address these dual challenges through a comprehensive framework that combines synthetic data generation with inference optimization",
    date: 2026,
    category: "Conversational AI",
    link: "blog/5",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 6,
    title: "CausalFusion: Integrating LLMs and graph falsification for causal discovery",
    description: "Causal discovery is central to enable causal models for tasks such as effect estimation, counterfactual reasoning, and root cause attribution. Yet existing approaches face trade-offs: purely statistical methods (e.g., PC, LiNGAM) often return structures that overlook domain knowledge, while expert-designed DAGs are difficult to scale and",
    date: 2026,
    category: "Computer vision",
    link: "blog/6",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 7,
    title: "Beyond grey-box assumptions: Uncertainty-guided example selection for black-box language models",
    description: "In-context learning (ICL) with Large Language Models has been historically effective, but performance depends heavily on demonstration quality while annotation budgets remain constrained. Existing uncertainty-based selection methods like Cover-ICL achieve strong performance through logit-based uncertainty estimation, but most",
    date: 2026,
    category: "Machine learning",
    link: "blog/7",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 8,
    title: "Temporal-consistent video restoration with pre-trained diffusion models",
    description: "Video restoration (VR) aims to recover high-quality videos from degraded ones. Although recent zero-shot VR methods using pre-trained diffusion models (DMs) show good promise, they suffer from approximation errors during reverse diffusion and insufficient temporal consistency. Moreover, dealing with 3D video data, VR is inherently",
    date: 2026,
    category: "Computer vision",
    link: "blog/8",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 9,
    title: "Domain-specific LLM adaptation: Bridging personalization and efficiency through synthetic data and optimization",
    description: "Large Language Models (LLMs) have demonstrated exceptional capabilities but face two critical deployment challenges: high computational costs and scarcity of personalized domain training data. We address these dual challenges through a comprehensive framework that combines synthetic data generation with inference optimization",
    date: 2026,
    category: "Computer vision",
    link: "blog/9",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
  {
    id: 10,
    title: "Neural codec language model for controllable timbre transfer in music synthesis",
    description: "Large Language Models (LLMs) have demonstrated exceptional capabilities but face two critical deployment challenges: high computational costs and scarcity of personalized domain training data. We address these dual challenges through a comprehensive framework that combines synthetic data generation with inference optimization",
    date: 2026,
    category: "Computer vision",
    link: "blog/10",
    author: "Sean Lee",
    journal: "AAAI 2026",
  },
];

function Home() {
  // 히어로 슬라이드쇼 데이터 불러오기 (최신순 5개)
  const heroData = dummyPosts.slice(0, 4);

  return (
    <div className={styles.top_container}>
      <Header
        logoImg={headerData.logoImg}
        menuItems={headerData.menuItems}
        subMenuItems={headerData.subMenuItems}
        subTitles={headerData.subTitles}
        socialItems={footerData.socialItems}
      />
      <HeroSlide data={heroData} />
      <AreaSection data={[...categoryData.researchAreaData, ...categoryData.extraCategoryData]} />
      <Fromtheblog data={fromtheblogDataSample} />
      <FeaturedNews data={featuredNewsDataSample} />
      <Publications data={PublicationsDataSample} />
      <Footer/>
    </div>
  );
}

export default Home;