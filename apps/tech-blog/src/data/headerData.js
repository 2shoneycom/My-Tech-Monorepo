import logoImg from "../assets/images/logo.png";
import researchAreaData from "./categoryData";

const menuItems = ["Article Search", "Blog", "Projects", "Essay"];
const subMenuItems = [
  null,
  researchAreaData.researchAreaData,
  null,
  null,
];
const subTitles = [
  null,
  "Research areas",
  null,
  null,
];

export default { logoImg, menuItems, subMenuItems, subTitles };