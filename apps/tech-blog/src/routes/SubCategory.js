import styles from "../css/subCategory.module.css";

import Header from '@sean/header-type-a';
import Hero_typeB from '@sean/hero-static-type-b';
import Publications from '@sean/section-publications';
import Footer from '@sean/footer-type-a';

import logoImg from "../assets/images/logo.png";
import { useParams } from "react-router-dom";

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
]

function SubCategory() {
  const { category } = useParams();

  const heroContents = [
    {
      id: "Web",
      title: "Web",
      description: "웹 프로젝트를 진행하며 연구한 프론트엔드/백엔드를 아우르는 전반적인 웹 지식 및 경험을 기술합니다.",
    },
    {
      id: "Algorithm",
      title: "Algorithm",
      description: "효율적인 문제 해결을 위한 알고리즘 설계와 복잡도 분석 기록입니다.",
    },
    {
      id: "Developments",
      title: "Developments",
      description: "모노레포 관리, 버전 관리 등 소프트웨어 공학적 접근법을 다룹니다.",
    }
  ];

  const currentHero = heroContents.find(
    (item) => item.id.toLowerCase() === category.toLowerCase()
  ) || heroContents[0];

  return (
    <div className={styles.top_container}>
      <Header logoImg={logoImg} />
      <Hero_typeB
        category="Research Area"
        title={currentHero.title}
        description={currentHero.description}
      />
      <Publications data={PublicationsDataSample} />
      <Footer />
    </div>
  );
}

export default SubCategory;