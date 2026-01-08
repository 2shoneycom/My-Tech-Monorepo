import { Link } from "react-router-dom";
import styles from "./css/fromtheblog.module.css";

function Fromtheblog({ data = [] }) {
  return (
    <div className={styles.top_container}>
      <div className={styles.fromtheblog_heading}>
        <div className={styles.fromtheblog_heading_body}>
          <svg className={styles.fromtheblog_heading_background_image} width="481" height="416" viewBox="0 0 481 416" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#D5DBDB" stroke-width="1.5" fill="none" fill-rule="evenodd">
              <path d="M240.966 104.38h119.646l59.823 103.537-59.823 103.536H240.966l-59.823-103.536z" />
              <path opacity=".6" d="M61.026.844h119.646l59.823 103.536-59.823 103.537H61.026L1.203 104.38z" />
              <path opacity=".603" d="M183.498.844h119.646l59.823 103.536-59.823 103.537H183.498L123.675 104.38z" />
              <path d="M180.672 207.917h119.646l59.823 103.536-59.823 103.537H180.672L120.85 311.453z" />
              <path d="M300.318 207.917h119.646l59.823 103.536-59.823 103.537H300.318l-59.823-103.537z" />
            </g>
          </svg>
          <div className={styles.fromtheblog_heading_text}>
            <div className={styles.fromtheblog_header_wrapper}>
              <h2 className={styles.fromtheblog_header}>From the blog</h2>
              <Link className={styles.fromtheblog_header_button} to="/">View all</Link>
              <div className={styles.fromtheblog_header_description}>
                Technical deep-dives and perspectives from our scientists.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fromtheblog_items_wrapper}>
        <ul className={styles.fromtheblog_items}>
          {data.map((item, index) => (
            <li className={styles.fromtheblog_items_item}>
              <div className={styles.PromoA}>
                <div className={styles.PromoA_media}>
                  <Link className={styles.Link} to={`${item.link}`}>
                    <picture>
                      <img className="Image" data-image-size="promoMedium" alt={`${item.title} + _image`} src={item.media_source} />
                    </picture>
                  </Link>
                </div>
                <div className={styles.PromoA_content}>
                  <div className={styles.PromoA_title}>
                    <Link className={styles.Link} to={`${item.link}`}>
                      {item.title}
                    </Link>
                  </div>
                  <div className={styles.PromoA_details}>
                    <div className={styles.PromoA_date}>
                      {item.date}
                    </div>
                    <div className={styles.PromoA_duration}>
                      {/* ::before */}
                      {item.duration}
                    </div>
                  </div>
                  {/* 첫번째 아이템만 상세 설명 표시 */}
                  { 
                    index == 0 ? 
                    <div className={styles.PromoA_description}>
                      {item.description}
                    </div>:
                    null
                  }
                  <div className={styles.PromoA_category}>
                    <Link className={styles.Link} to={`${item.category}`}>
                      {item.category}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.fromtheblog_footer_wrapper}>
        <Link className={styles.fromtheblog_footer_button} to="blog">View all</Link>
      </div>
    </div>
  );
}

export default Fromtheblog;