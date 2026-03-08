import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/header_typeA.module.css";
import useSmartHeader from "./customHooks/useSmartHeader";
import Hamburger from "./components/Hamburger";

function Header_typeA({ logoImg, menuItems, subMenuItems, subTitles, socialItems}) {
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
            {menuItems.map((item, index) => {
              // 하위 메뉴가 있을 때
              if (subMenuItems[index] != null)
                return (
                  <div className={styles.NavigationItem} key={index}>
                    <div className={styles.NavigationItem_text}>
                      <div className={styles.NavigationItem_text_link}>
                        {item}
                      </div>
                      <div className={styles.NavigationItem_more}>
                        <button>
                          <svg id="chevron_nav_dropdown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
                            <path d="M6.97951 1.7706C7.21235 1.53988 7.58746 1.53993 7.82033 1.7706C8.05623 2.00435 8.05623 2.38548 7.82033 2.61923L4.0049 6.40048L4.00001 6.3956L3.99611 6.40048L0.179702 2.61923C-0.0560031 2.38552 -0.055986 2.00431 0.179702 1.7706C0.412507 1.53992 0.787647 1.54003 1.02052 1.7706L4.00001 4.72177L6.97951 1.7706Z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* 드롭다운 메뉴 영역 */}
                    <ul className={styles.NavigationItem_items}>
                      <li className={styles.NavigationItem_items_item}>
                        <div className={styles.NavigationGroup}>
                          {/* 부제목 (e.g. Research areas) */}
                          <span className={styles.NavigationLink}>
                            {subTitles[index]}
                          </span>
                          <ul className={styles.NavigationGroup_items}>
                            {subMenuItems[index].map((subItem, subIndex) =>
                              <li className={styles.NavigationGroup_items_item} key={subItem.id}>
                                <Link
                                  className={styles.NavigationLink}
                                  to={`/${item}/${subItem.title}`}
                                >
                                  <span className={styles.NavigationLink_icon}>
                                    <picture>
                                      <img className={styles.Image} dataImageSize="smallIcon" alt={`${subItem.title}_icon`} src={subItem.icon}></img>
                                    </picture>
                                  </span>
                                  {subItem.title}
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              else // 하위 메뉴가 없을 때
                return (
                  <div className={styles.NavigationItem} key={index}>
                    <div className={styles.NavigationItem_text}>
                      <Link
                        className={styles.NavigationItem_text_link}
                        to={`/${item}`}
                        key={index}
                      >
                        {item}
                      </Link>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <Hamburger
        menuItems={menuItems}
        subMenuItems={subMenuItems}
        socialItems={socialItems}
        subTitles={subTitles}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}

export default Header_typeA;