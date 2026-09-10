import styles from "./css/footerA.module.css";
import Link from 'next/link';

function Footer_typeA({ logoImg, socialItems }) {
  const footerMenuItems = [
    { label: "About", href: "/about" },
    { label: "Research areas", href: "/#research-areas" },
    { label: "Blog", href: "/#from-the-blog" },
    { label: "Publications", href: "/#publications" },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer id={styles.footer}>
      <div className={styles.footer_body}>
        <div className={styles.footer_logo}>
          <Link href="/">
            <img src={logoImg} alt="sean's tech blog" width="171" height="38"></img>
          </Link>
        </div>
        <div className={styles.footer_columns}>
          <div className={styles.footer_column}>
            <div className={styles.footer_navigation}>
              <nav className={styles.FooterNavigation}>
                <ul className={styles.FooterNavigation_items}>
                  {footerMenuItems.map((item, index) =>
                    <li className={styles.FooterNavigation_items_item} key={index}>
                      <div className={styles.NavigationItem}>
                        <div className={styles.NavigationItem_text}>
                          <Link className={styles.NavigationItem_text_link} href={item.href}>{item.label}</Link>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.footer_column}>
            <div className={styles.footer_content}>
              <div className={styles.PromoNewsletter}>
                <div className={styles.PromoNewsletter_content}>
                  <div className={styles.PromoNewsletter_body}>
                    <div className={styles.PromoNewsletter_text}>
                      <div className={styles.PromoNewsletter_title}>
                        <Link className="Link" href="/">
                          Get more from Sean's Tech Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_content}>
          <div className={styles.footer_disclaimer}>
            <p>{`© ${currentYear} Sean's Tech Blog. All rights reserved.`}</p>
          </div>
          <div className={styles.footer_social}>
            <div className={styles.SocialBar}>
              <div className={styles.SocialBar_heading}>Social</div>
              <ul className={styles.SocialBar_items}>
                {socialItems.map((item, index) =>
                  <li className={styles.SocialBar_items_item} key={item.id}>
                    <Link className={styles.SocialLink} href={item.url} target="_blank">
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
    </footer>
  );
}

export default Footer_typeA;