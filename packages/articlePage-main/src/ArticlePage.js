import { Link } from 'react-router-dom';
import styles from './css/articlePage.module.css';

function ArticlePage({ article_category, article_headLine, article_subHeadLine, article_author,
  article_date, article_readDuration, article_content }) {
  return (
    <main className={styles.ArticlePage_main}>
      {/* ::before */}
      <article className={styles.ArticlePage_mainContent}>
        <div className={styles.ArticlePage_category}>
          <span className={styles.Link}>
            <Link to='#'>{article_category}</Link>
          </span>
        </div>
        <h1 className={styles.ArticlePage_headline}>
          {article_headLine}
        </h1>
        <h2 className={styles.ArticlePage_subHeadLine}>
          {article_subHeadLine}
        </h2>
        <div className={styles.ArticlePage_bylineAndActions}>
          <div className={styles.ArticlePage_byline}>
            <div className={styles.ArticlePage_authors}>
              <span className={styles.ArticlePage_authorBy}>By{'\u00A0'}</span>
              <Link to='#'>
                <span>{article_author}</span>
              </Link>
            </div>
            <div className={styles.ArticlePage_datePublished}>
              {article_date}
            </div>
            {/* meta content 필요한가? */}
            <div className={styles.ArticlePage_readDuration}>
              {/* ::before */}
              {article_readDuration} min read
            </div>
          </div>
          <div className={styles.ArticlePage_actions}>
            <div className={styles.ActionBar}>
              <div className={styles.ActionBar_overlay}></div>
              <div className={styles.ActionBar_heading}>
                <Link to='#'>
                  <svg id="shareIcon" width="16px" height="16px" viewBox="0 0 16 16">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-927.000000, -946.000000)" fill="currentColor" fillRule="nonzero">
                        <g id="Group" transform="translate(290.000000, 690.000000)">
                          <g id="icon/share" transform="translate(637.000000, 256.000000)">
                            <polygon id="Path-10" points="8.4844554 1 8.4844554 2.47468167 1.48633803 2.47434469 1.48633803 14.5247918 13.5135954 14.5247918 13.513662 9.83447155 15 9.83447155 15 16 0 16 0 1"></polygon>
                            <g id="" transform="translate(4.636364, 2.500000)">
                              <path d="M11.3636364,3.33333333 L7.30519481,6.66666667 L7.30519481,5 L5.88474026,5 C5.47044102,5 5.09947409,5.01302083 4.77183949,5.0390625 C4.44420488,5.06510417 4.11868405,5.11176215 3.79527699,5.17903646 C3.47186993,5.24631076 3.1907383,5.33854167 2.9518821,5.45572917 C2.71302591,5.57291667 2.490023,5.72374132 2.28287338,5.90820312 C2.07572376,6.09266493 1.90662202,6.31184896 1.77556818,6.56575521 C1.64451434,6.81966146 1.54199642,7.12022569 1.46801441,7.46744792 C1.3940324,7.81467014 1.3570414,8.20746528 1.3570414,8.64583333 C1.3570414,8.88454861 1.36761025,9.15147569 1.38874797,9.44661458 C1.38874797,9.47265625 1.3940324,9.52365451 1.40460126,9.59960938 C1.41517012,9.67556424 1.42045455,9.73307292 1.42045455,9.77213542 C1.42045455,9.83723958 1.40248749,9.89149306 1.36655337,9.93489583 C1.33061925,9.97829861 1.28094562,10 1.21753247,10 C1.14989177,10 1.09070617,9.96310764 1.03997565,9.88932292 C1.01038285,9.85026042 0.982903815,9.80251736 0.957538555,9.74609375 C0.932173295,9.68967014 0.903637378,9.62456597 0.871930804,9.55078125 C0.840224229,9.47699653 0.818029627,9.42491319 0.805346997,9.39453125 C0.268448999,8.15755208 0,7.17881944 0,6.45833333 C0,5.59461806 0.112029897,4.87196181 0.336089692,4.29036458 C1.0209517,2.54123264 2.87050189,1.66666667 5.88474026,1.66666667 L7.30519481,1.66666667 L7.30519481,0 L11.3636364,3.33333333 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Share
                </Link>
              </div>
              <ul className={styles.ActionBar_items}>
                {/* 나중에 구현하자 */}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.ArticlePage_articleContainer}>
          <div className={styles.ArticlePage_railDesktop}>
            <aside className={styles.ArticlePage_rail}>
              <div className={styles.ArticlePage_rail_sticky}>
                <section className={styles.ArticlePage_rail_item}>
                  <div className={styles.ListRelatedItems}>
                    <div className={styles.ListRelatedItems_header_wrappers}>
                      <h3 className={styles.ListRelatedItems_header}>
                        Conference
                      </h3>
                    </div>
                    <ul className={styles.ListRelatedItems_items}>
                      <li className={styles.ListRelatedItems_items_item}>
                        <Link to={'#'}>
                          KDD 2025
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </aside>
          </div>
          <div className={styles.ArticlePage_articleBody}>
            <div className={styles.RichTextArticleBody}>
              <div 
                className={`${styles.RichTextArticleBody_body} ${styles.RichTextBody}`}
                dangerouslySetInnerHTML={{__html: article_content}}
              >
                {/* ::after */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ArticlePage_researchAreas}>
          <div className={styles.ListTags}>
            <div className={styles.ListTags_title}>
              Research areas
            </div>
            <ul className={styles.ListTags_items}>
              <li className={styles.ListTags_items_item}>
                <Link className={styles.Link} to='#'>
                  {article_category}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ArticlePage_tags}>
          <div className={styles.ListTags}>
            <div className={styles.ListTags_title}>
              Tags
            </div>
            <ul className={styles.ListTags_items}>
              <li className={styles.ListTags_items_item}>
                <Link className={styles.Link} to='#'>
                  Large language models(LLMs)
                </Link>
              </li>
              <li className={styles.ListTags_items_item}>
                <Link className={styles.Link} to='#'>
                  Reinforcement learning
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}

export default ArticlePage;