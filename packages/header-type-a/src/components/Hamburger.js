import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/hamburger.module.css";

function Hamburger({ menuItems, isMenuOpen }) {
  const hamburgerRef = useRef(null);

  useEffect(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.style.setProperty('--hamburger-width', `${hamburgerRef.current.offsetWidth}px`);
    }
  }, [isMenuOpen]);

  let hamburgerClass = styles.hamburger_outer_box;
  if (!isMenuOpen) {
    hamburgerClass = `${hamburgerClass} ${styles.hamburger_hidden}`;
  }

  return (
    <div ref={hamburgerRef} className={hamburgerClass}>
      <div className={styles.hamburger_navigatior}>
        {menuItems.map((item, index) =>
          <Link
            className={styles.hamburger_navigatior_item}
            to={`/${item}`}
            key={index}
          >
            <div className={styles.hamburger_navigator_text}>{item}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hamburger;