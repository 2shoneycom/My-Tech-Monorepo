import { Link } from 'react-router-dom';
import styles from './css/publications.module.css';

function Publications({ data = [] }) {
  return (
    <section className={styles.top_contianer}>
      {/* ::before */}
      <div className={styles.header_wrapper}>
        <h2 className={styles.header}>Publications</h2>
        <Link className={styles.header_button} to='/'>View all</Link>
      </div>
      <div className={styles.body}>
        <ul className={styles.body_items}>
          {data.map((item, index) => 
            <li className={styles.body_items_item} key={index}>
              <div className={styles.PromoF}>
                <div className={styles.PromoF_title}>
                  <Link className={styles.Link} to={item.link}>{item.title}</Link>
                </div>
                <div className={styles.PromoF_details}>
                  <div className={styles.PromoF_authors}>
                    <Link className={styles.Link} to={`/author/${item.author}`}>{item.author}</Link>
                    {/* ::after*/}
                  </div>
                  <div className={styles.PromoF_journal}>
                    {item.journal}
                    {/* ::after */}
                  </div>
                  <div className={styles.PromoF_date}>{item.date}</div>
                </div>
                <div className={styles.PromoF_content}>
                  <div className={styles.PromoF_body}>
                    <div className={styles.PromoF_description}>
                      {item.description}
                      <span>...
                        <Link className={styles.Link} to={item.link}>Read more</Link>
                      </span>
                    </div>
                    <div className={styles.PromoF_category}>
                      <Link className={styles.Link}>{item.category}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
        <div className={styles.nextPage}>
          <Link className={styles.Link} to='/'>Load more</Link>
        </div>
      </div>
    </section>
  );
}

export default Publications;