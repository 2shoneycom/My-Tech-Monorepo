import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/hamburger.module.css";

function Hamburger({ navData, isMenuOpen }) {
  const [navItemList, setNavItemList] = useState(navData.itemList);
  const hamburgerRef = useRef(null);

  if (hamburgerRef.current) {
    hamburgerRef.current.style.setProperty('--hamburger-width', `${hamburgerRef.current.offsetWidth}px`);
  }

  let hamburgerClass = styles.hamburger_outer_box;
  if (!isMenuOpen) {
    hamburgerClass = `${hamburgerClass} + ${styles.hamburger_hidden}`;
  }

  return (
    <div ref={hamburgerRef} className={hamburgerClass}>
      <div className={styles.hamburger_navigatior}>
        {navItemList.map((navItem, index) =>
          <Link
            className={styles.hamburger_navigatior_item}
            to={`/${navData.linkList[navItem]}`}
            key={index}
          >
            <div className={styles.hamburger_navigator_text}>{navItem}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hamburger;