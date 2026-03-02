import { Link } from 'react-router-dom';
import styles from './css/promoF.module.css';

function PromoF({ 
  article_category = "Conversational AI", 
  article_headLine = "Customizing multiturn AI agents with reinforcement learning", 
  article_subHeadLine = "Leveraging existing environment simulators and reward functions based on verifiable ground truth boosts task success rate, even with small models and small training datasets.", 
  airticle_thumbnail = "https://assets.amazon.science/dims4/default/9c01de1/2147483647/strip/true/crop/1920x1073+0+4/resize/340x190!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2Ff8%2Fba%2F98dec56b4e74ba13050a0d22931e%2Fsimulator-trainer-16x9.jpg",
  article_author = "Sean Lee",
  article_date = "January 13, 2026"
}) {
  return (
    <div className={styles.PromoF}>
      <div className={styles.PromoF_title}>
        <Link className={styles.Link} to={`/post/${article_headLine}`}>
          {article_headLine}
        </Link>
      </div>
      <div className={styles.PromoF_details}>
        <div className={styles.PromoF_authors}>
          <Link className={styles.Link} to={`/author/${article_author}`}>{article_author}</Link>
          {/* ::after */}
        </div>
        <div className={styles.PromoF_date}>
          {article_date}
        </div>
      </div>
      <div className={styles.PromoF_content}>
        <div className={styles.PromoF_media}>
          <Link className={styles.Link} to={`/post/${article_headLine}`}>
            <picture>
              <img className={styles.Image} data_image_size="promoSmall" alt="Simulator-Trainer-16x9.jpg" width="340" height="190" src={airticle_thumbnail}></img>
            </picture>
          </Link>
        </div>
        <div className={styles.PromoF_body}>
          <div className={styles.PromoF_description}>
            {article_subHeadLine}
          </div>
          <div className={styles.PromoF_category}>
            <Link className={styles.Link} to={`/research-areas/${article_category}`}>
              {article_category}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoF;