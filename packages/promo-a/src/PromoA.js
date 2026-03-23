import { Link } from 'react-router-dom';
import styles from './css/promoA.module.css';

function PromoA({ item, detailsOn = true, descciptOn = true, categoryOn = true, mediaClassName, titleClassName }) {
  return (
    <div className={styles.PromoA}>
      <div className={`${styles.PromoA_media} ${mediaClassName || ''}`}>
        <Link className={styles.Link} to={`/post/${item.title}`}>
          <picture>
            <img className="Image" data-image-size="promoMedium" alt={`${item.title} + _image`} src={item.thumbnail} />
          </picture>
        </Link>
      </div>
      <div className={styles.PromoA_content}>
        <div className={`${styles.PromoA_title} ${titleClassName || ''}`}>
          <Link className={styles.Link} to={`/post/${item.title}`}>
            {item.title}
          </Link>
        </div>
        {
          detailsOn ?
            <div className={styles.PromoA_details}>
              <div className={styles.PromoA_date}>
                {item.date}
              </div>
              <div className={styles.PromoA_duration}>
                {/* ::before */}
                {item.readDuration}
              </div>
            </div> :
            null
        }
        {
          descciptOn ?
            <div className={styles.PromoA_description}>
              {item.subTitle}
            </div> :
            null
        }
        {
          categoryOn ?
            <div className={styles.PromoA_category}>
              <Link className={styles.Link} to={`/Blog/${item.category}`}>
                {item.category}
              </Link>
            </div> :
            null
        }
      </div>
    </div>
  );
}

export default PromoA;