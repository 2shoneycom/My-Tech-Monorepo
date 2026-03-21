import webIcon from "../assets/images/web_icon.png";
import algorithmIcon from "../assets/images/algorithm_icon.png";
import developmentsIcon from "../assets/images/developments_icon.png";
import essayIcon from "../assets/images/essay_icon.png";

const researchAreaData = [
  {
    id: "Web",
    icon: webIcon,
    title: "Web",
    description: "웹 프로젝트를 진행하며 연구한 프론트엔드/백엔드를 아우르는 전반적인 웹 지식 및 경험을 기술합니다.",
    link: "/Blog/Web"
  },
  {
    id: "Algorithm",
    icon: algorithmIcon,
    title: "Algorithm",
    description: "효율적인 문제 해결을 위한 알고리즘 설계와 복잡도 분석 기록입니다.",
    link: "/Blog/Algorithm"
  },
  {
    id: "Developments",
    icon: developmentsIcon,
    title: "Developments",
    description: "모노레포 관리, 버전 관리 등 소프트웨어 공학적 접근법을 다룹니다.",
    link: "/Blog/Developments"
  },
];

const extraCategoryData = [
  {
    id: "Projects",
    icon: essayIcon,
    title: "Projects",
    description: "프로젝트를 통해 배운 것들을 정리합니다",
    link: "/Projects"
  },
  {
    id: "Essay",
    icon: essayIcon,
    title: "Essay",
    description: "개발 이야기를 다루는 공간입니다",
    link: "/Essay"
  }
];

export default { researchAreaData, extraCategoryData };