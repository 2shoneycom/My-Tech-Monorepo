import styles from "./css/footerA.module.css";
import Link from 'next/link';

function Footer_typeA({ logoImg, socialItems }) {
  const footerMenuItems = [
    "About", "Research areas", "Blog", "Publications", "Conferences", "Code and datasets", "Academia",
    "Amazon News", "Amazon Developer", "Amazon Web Services", "Awards and recognitions", "Newsletter", "Careers", "FAQs"
  ];

  return (
    <footer id={styles.footer}>
      <div className={styles.footer_body}>
        <div className={styles.footer_logo}>
          <Link href="/">
            <img src={logoImg} alt="sean's tech blog" width="171" height="29"></img>
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
                          <Link className={styles.NavigationItem_text_link} href="/">{item}</Link>
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
                  <div className={styles.PromoNewsletter_media}>
                    {/* ::before */}
                    <picture>
                      <img className={styles.Image} data-image-size="hexagonXSmall" alt="View from space of a connected network around planet Earth representing the Internet of Things." width="70" height="61" src="https://assets.amazon.science/dims4/default/edd567d/2147483647/strip/true/crop/1465x1277+227+0/resize/70x61!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F20%2Fc4%2Fc36de9f643dab18e2f27ea071590%2Famazon-science-newsletter-project-kuiper.jpg"></img>
                    </picture>
                  </div>
                  <div className={styles.PromoNewsletter_body}>
                    <div className={styles.PromoNewsletter_text}>
                      <div className={styles.PromoNewsletter_title}>
                        <Link className="Link" href="/">
                          Get more from Sean's Tech Blog
                        </Link>
                      </div>
                      <div className={styles.PromoNewsletter_description}>
                        Subscribe to our monthly newsletter
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
            <p>
              <Link className={styles.Link} href="/" target="_blank">Amazon.com</Link>
              {" | "}
              <Link className={styles.Link} href="/" target="_blank">Conditions of Use</Link>
              {" | "}
              <Link className={styles.Link} href="/" target="_blank">Privacy</Link>
              {" | © 1996-2026 Amazon.com, Inc. or its affiliates"}
            </p>
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