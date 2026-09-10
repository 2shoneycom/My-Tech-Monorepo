import Link from 'next/link';
import styles from './css/publications.module.css';

function Publications({ data = [], loadNext }) {
  return (
    <section className={styles.top_contianer}>
      {/* ::before */}
      <div className={styles.header_wrapper}>
        <h2 className={styles.header}>Publications</h2>
      </div>
      <div className={styles.body}>
        <ul className={styles.body_items}>
          {data.map((item, index) =>
            <li className={styles.body_items_item} key={index}>
              <div className={styles.PromoF}>
                <div className={styles.PromoF_title}>
                  <Link className={styles.Link} href={item.href}>{item.title}</Link>
                </div>
                <div className={styles.PromoF_details}>
                  {item.author && (
                    <div className={styles.PromoF_authors}>
                      <Link className={styles.Link} href={`/author/${item.author}`}>{item.author}</Link>
                      {/* ::after*/}
                    </div>
                  )}
                  <div className={styles.PromoF_date}>{item.date}</div>
                </div>
                <div className={styles.PromoF_content}>
                  <div className={styles.PromoF_body}>
                    <div className={styles.PromoF_description}>
                      {item.subTitle}
                      <span>...
                        <Link className={styles.Link} href={item.href}>Read more</Link>
                      </span>
                    </div>
                    {item.category && (
                      <div className={styles.PromoF_category}>
                        <Link className={styles.Link} href={`/blog/${item.category.toLowerCase()}`}>{item.category}</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
        <div className={styles.nextPage}>
          <Link className={styles.Link} onClick={loadNext} href='#'>Load more</Link>
        </div>
      </div>
    </section>
  );
}

export default Publications;