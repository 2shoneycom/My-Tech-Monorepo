import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/hamburger.module.css";

function Hamburger({ menuItems, subMenuItems, socialItems, subTitles, isMenuOpen }) {
  const hamburgerRef = useRef(null);

  useEffect(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.style.setProperty('--hamburger-width', `${hamburgerRef.current.offsetWidth}px`);
    }
  }, [isMenuOpen]);

  let hamburgerClass = styles.Page_header_hamburger_menu;
  if (!isMenuOpen) {
    hamburgerClass = `${hamburgerClass} ${styles.hamburger_hidden}`;
  }

  // 몇 번째 하위 메뉴가 열렸는지
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={hamburgerRef} className={hamburgerClass}>
      <div className={styles.Page_header_hamburger_menu_wrapper}>
        <div className={styles.Page_header_hamburger_menu_content}>
          {/* 메뉴 바 */}
          <nav className={styles.Navigation}>
            <ul className={styles.Navigation_items}>
              {menuItems.map((item, index) =>
                <li className={styles.Navigation_items_item} key={item}>
                  {/* ::before (일단 구현 안했음) */}
                  {subMenuItems[index] != null ?
                    // 하위 메뉴가 있으면
                    <div className={index === openIndex ? `${styles.submenuOpened} ${styles.NavigationItem}` : styles.NavigationItem}>
                      {/* 텍스트 부분 */}
                      <div className={styles.NavigationItem_text}>
                        <Link
                          className={styles.NavigationItem_text_link}
                        // to={`/${item}`}
                        >
                          {item}
                        </Link>
                        <div className={styles.NavigationItem_more}>
                          <button onClick={() => toggleMenu(index)}>
                            <svg id="chevron-right" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.21339 1.27619C1.92497 0.985111 1.92497 0.515512 2.21339 0.224432C2.50555 -0.0701113 2.98183 -0.0702133 3.27393 0.224432L8.0005 4.99396L7.99464 5.0008L8.0005 5.00568L3.27393 9.77521C2.98177 10.0701 2.50558 10.07 2.21339 9.77521C1.92497 9.48414 1.92497 9.01551 2.21339 8.72443L5.90284 5.0008L2.21339 1.27619Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      {/* 실제 하위 메뉴 부분 */}
                      <ul className={styles.NavigationItem_items}>
                        {/* 하위 메뉴의 제목 부분 */}
                        <li className={styles.NavigationItem_items_item} data-back-link>
                          {/* ::before (일단 구현 안했음) */}
                          <button 
                            className={styles.NavigationBackLink}
                            onClick={() => toggleMenu(index)}
                          >
                            <svg id="chevron-left" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.7214 17.7246C9.34994 18.0918 8.74767 18.0918 8.37621 17.7246L0.278598 9.71952C-0.0928661 9.3523 -0.0928661 8.75692 0.278598 8.3897C0.650063 8.02248 1.25233 8.02248 1.62379 8.3897L9.7214 16.3948C10.0929 16.762 10.0929 17.3574 9.7214 17.7246Z"></path>
                              <path d="M9.7214 0.275414C9.34994 -0.0918045 8.74767 -0.0918045 8.37621 0.275414L0.278598 8.28048C-0.0928661 8.6477 -0.0928661 9.24308 0.278598 9.6103C0.650063 9.97752 1.25233 9.97752 1.62379 9.6103L9.7214 1.60523C10.0929 1.23801 10.0929 0.642633 9.7214 0.275414Z"></path>
                            </svg>
                            {item}
                          </button>
                        </li>
                        {/* 하위 메뉴 영역 */}
                        <li className={styles.NavigationItem_items_item}>
                          {/* ::before (일단 구현 안했음) */}
                          <div className={styles.NavigationGroup}>
                            {/* 부제목 (e.g. Research areas) */}
                            <span className={styles.NavigationLink}>
                              {subTitles[index]}
                            </span>
                            <ul className={styles.NavigationGroup_items}>
                              {/* 하위 메뉴들 */}
                              {subMenuItems[index].map((subItem, subIndex) =>
                                <li className={styles.NavigationGroup_items_item}>
                                  {/* ::before (일단 구현 안했음) */}
                                  <Link
                                    className={styles.NavigationLink}
                                    to={`/${item}/${subItem.title}`}
                                  >
                                    <span className={styles.NavigationLink_icon}>
                                      <picture>
                                        <img className={styles.Image} dataimagesize="smallIcon" alt={`${subItem.title}_icon`} src={subItem.icon}></img>
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
                    :
                    // 하위메뉴가 없으면
                    <div className={styles.NavigationItem}>
                      <div className={styles.NavigationItem_text}>
                        <Link
                          className={styles.NavigationItem_text_link}
                          to={`/${item}`}
                        >
                          {item}
                        </Link>
                      </div>
                    </div>}
                </li>
              )}
            </ul>
          </nav>
          {/* 소셜 바 */}
          <div className={styles.Page_header_socialBar}>
            <div className={styles.SocialBar}>
              <div className={styles.SocialBar_heading}>
                Social
              </div>
              <ul className={styles.SocialBar_items}>
                {socialItems.map((item, index) =>
                  <li className={styles.SocialBar_items_item} key={item.id}>
                    <Link className={styles.SocialLink} to={item.url}>
                      {item.svg}
                      <span className={styles.sr_only}>{item.name}</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;