import styles from "./css/footerA.module.css";
import { Link } from "react-router-dom";

function Footer_typeA() {
  const footerMenuItems = [
    "About", "Research areas", "Blog", "Publications", "Conferences", "Code and datasets", "Academia",
    "Amazon News", "Amazon Developer", "Amazon Web Services", "Awards and recognitions", "Newsletter", "Careers", "FAQs"
  ];

  return (
    <footer>
      <div className={styles.footer_body}>
        <div className={styles.footer_logo}>
          <Link to="/">
            <img src="https://assets.amazon.science/ce/51/a0ecec814b0894e11c0f22dbcc17/amazonscience-white.svg" alt="Amazon Science" width="171" height="29"></img>
          </Link>
        </div>
        <div className={styles.footer_columns}>
          <div className={styles.footer_column}>
            <div className={styles.footer_navigation}>
              <nav className={styles.FooterNavigation}>
                <ul className={styles.FooterNavigation_items}>
                  {footerMenuItems.map((item) =>
                    <li className={styles.FooterNavigation_items_item}>
                      <div className={styles.NavigationItem}>
                        <div className={styles.NavigationItem_text}>
                          <Link className={styles.NavigationItem_text_link} to="/">{item}</Link>
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
                      <img class="Image" data-image-size="hexagonXSmall" alt="View from space of a connected network around planet Earth representing the Internet of Things." width="70" height="61" src="https://assets.amazon.science/dims4/default/edd567d/2147483647/strip/true/crop/1465x1277+227+0/resize/70x61!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F20%2Fc4%2Fc36de9f643dab18e2f27ea071590%2Famazon-science-newsletter-project-kuiper.jpg"></img>
                    </picture>
                  </div>
                  <div className={styles.PromoNewsletter_body}>
                    <div className={styles.PromoNewsletter_text}>
                      <div className={styles.PromoNewsletter_title}>
                        <Link className="Link" to="/">
                          Get more from Amazon Science
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
              <Link className={styles.Link} to="/" target="_blank">Amazon.com</Link>
              {" | "}
              <Link className={styles.Link} to="/" target="_blank">Conditions of Use</Link>
              {" | "}
              <Link className={styles.Link} to="/" target="_blank">Privacy</Link>
              {" | © 1996-2026 Amazon.com, Inc. or its affiliates"}
            </p>
          </div>
          <div className={styles.footer_social}>
            <div className={styles.SocialBar}>
              <div className={styles.SocialBar_heading}>Social</div>
              <ul className={styles.SocialBar_items}>
                <li className={styles.SocialBar_items_item}>
                  <Link className={styles.SocialLink} to="/" target="_blank">
                    <svg id="mono-icon-youtube" viewBox="0 0 512 512">
                      <g>
                        <path fill-rule="evenodd" d="M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6
                c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5
                c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107
                C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z"></path>
                      </g>
                    </svg>
                    <span className={styles.sr_only}>youtube</span>
                  </Link>
                </li>
                <li className={styles.SocialBar_items_item}>
                  <Link className={styles.SocialLink} to="/" target="_blank">
                    <svg id="mono-icon-linkedin" viewBox="0 0 16 17">
                      <g fill-rule="evenodd">
                        <path d="M3.734 16.125H.464V5.613h3.27zM2.117 4.172c-.515 0-.96-.188-1.336-.563A1.825 1.825 0 0 1 .22 2.273c0-.515.187-.96.562-1.335.375-.375.82-.563 1.336-.563.516 0 .961.188 1.336.563.375.375.563.82.563 1.335 0 .516-.188.961-.563 1.336-.375.375-.82.563-1.336.563zM15.969 16.125h-3.27v-5.133c0-.844-.07-1.453-.21-1.828-.259-.633-.762-.95-1.512-.95s-1.278.282-1.582.845c-.235.421-.352 1.043-.352 1.863v5.203H5.809V5.613h3.128v1.442h.036c.234-.469.609-.856 1.125-1.16.562-.375 1.218-.563 1.968-.563 1.524 0 2.59.48 3.2 1.441.468.774.703 1.97.703 3.586v5.766z"></path>
                      </g>
                    </svg>
                    <span className={styles.sr_only}>linkedin</span>
                  </Link>
                </li>
                <li className={styles.SocialBar_items_item}>
                  <Link className={styles.SocialLink} to="/" target="_blank">
                    <svg id="mono-icon-github" viewBox="0 0 16 16">
                      <path d="M7.99926333,0 C3.58218484,0 0,3.58169373 0,8.00024556 C0,11.5347924 2.29202861,14.5330428 5.47100893,15.5909021 C5.87126677,15.6645692 6.0171276,15.4175389 6.0171276,15.2053777 C6.0171276,15.0158077 6.010252,14.512416 6.00632309,13.8449922 C3.78108598,14.3282483 3.31158108,12.7723994 3.31158108,12.7723994 C2.94766567,11.848123 2.42315602,11.602075 2.42315602,11.602075 C1.69679855,11.1060499 2.47816078,11.1158722 2.47816078,11.1158722 C3.28113202,11.1723503 3.70348998,11.9404524 3.70348998,11.9404524 C4.41707849,13.162835 5.57610731,12.8097241 6.03186101,12.6049296 C6.10454587,12.0882777 6.31130483,11.7356579 6.5396728,11.5357746 C4.76331379,11.3339268 2.8956076,10.6473495 2.8956076,7.58181651 C2.8956076,6.70861598 3.20746493,5.99404524 3.71920562,5.43515762 C3.63669849,5.23281869 3.36216581,4.41904294 3.79778385,3.31796556 C3.79778385,3.31796556 4.46913656,3.10285767 5.99748304,4.13812579 C6.63544001,3.96034255 7.32005279,3.87194205 8.00024556,3.86850425 C8.67994721,3.87194205 9.36406888,3.96034255 10.0030081,4.13812579 C11.5303723,3.10285767 12.2007428,3.31796556 12.2007428,3.31796556 C12.6373431,4.41904294 12.3628104,5.23281869 12.2807944,5.43515762 C12.7935173,5.99404524 13.1029191,6.70861598 13.1029191,7.58181651 C13.1029191,10.6552073 11.2322662,11.3314712 9.45050493,11.5293901 C9.73731545,11.7764204 9.99318579,12.2645876 9.99318579,13.0110808 C9.99318579,14.0802357 9.98336352,14.9431229 9.98336352,15.2053777 C9.98336352,15.4195034 10.127751,15.6684981 10.5334111,15.590411 C13.7099358,14.5300961 16,11.5338101 16,8.00024556 C16,3.58169373 12.4178152,0 7.99926333,0" id="icon-Github"></path>
                    </svg>
                    <span className={styles.sr_only}>github</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer_typeA;