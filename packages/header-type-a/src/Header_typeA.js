import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/header_typeA.module.css";
import useSmartHeader from "./customHooks/useSmartHeader";
import Hamburger from "./components/Hamburger";

function Header_typeA({ logoImg }) {
  /* [Basic Data] */
  // Here to load data you need
  const recievedNavData =
  {
    itemList_eng: ["Articles Search", "Web", "Algorithm", "Common"],
    itemList_kor: ["탐색", "웹 개발", "알고리즘", "공통 지식"],
    linkList: {
      "Articles Search": "Articles Search",
      "Web": "Web",
      "Algorithm": "Algorithm",
      "Common": "Common",
    },
  };

  const [navItemList, setNavItemList] = useState(recievedNavData.itemList_eng);
  /* [Hamburger Menu] */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  /* [Smart Header System] */
  const { isHidden, headerRef } = useSmartHeader();
  let headerClass = styles.outer_box;
  if (isHidden) {
    headerClass = `${headerClass} ${styles[`header-hidden`]}`;
  }

  return (
    <div ref={headerRef} className={headerClass}>
      <div className={styles.inner_box}>
        <div className={styles.flex_container}>
          {/* Hamburger Menu Trigger */}
          <button
            className={`${styles.hamburger_menu_trigger} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <svg
              className={styles.burger_menu_icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" />
            </svg>
            <svg
              className={styles.close_menu_icon}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
            </svg>
          </button>

          {/* Logo */}
          <Link
            className={styles.header_logo}
            to="/"
          >
            <img src={logoImg} alt="seans' tech blog"></img>
          </Link>

          {/* Navigator */}
          <div className={styles.header_navigator}>
            {navItemList.map((navItem, index) =>
              <Link
                className={styles.header_navigator_item}
                to={`/${recievedNavData.linkList[navItem]}`}
                key={index}
              >
                {navItem}
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <Hamburger
        navData={recievedNavData}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}

export default Header_typeA;