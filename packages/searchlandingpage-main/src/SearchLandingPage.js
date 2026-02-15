import styles from './css/searchlandingpage.module.css';

import SearchResultsModule_aside from '@sean/search-result-module-aside'
import PromoF from '@sean/promo-f';
import { Link } from 'react-router-dom';

function SearchLandingPage() {
  return (
    <main className={styles.SearchLandingPage_main}>
      <div className={styles.SearchResultsModule}>
        <form className={styles.SearchResultsModule_form}>
          <div className={styles.SearchResultsModule_ajax}>
            <div className={styles.SearchResultsModule_filters}>
              <div className={styles.SearchResultsModule_wrapper}>
                {/* 사이드 바 */}
                <SearchResultsModule_aside />
                {/* 메인 영역 */}
                <div className={styles.SearchResultsModule_main}>
                  <div className={styles.SearchResultsModule_results_header_wrapper}>
                    <div className={styles.SearchResultsModule_results_header}>
                      <div className={styles.SearchResultsModule_count}>304 results found</div>
                      <div className={styles.SearchResultsModule_sorts}>
                        <div className={styles.Select}>
                          <label className={styles.Select_label}>
                            <span>Sort</span>
                            <select className={styles.Select_input} name='s'>
                              <option value={0} defaultValue={0}>Relevance</option>
                              <option value={1}>Newest</option>
                              <option value={2}>Oldest</option>
                              <option value={3}>A - Z</option>
                              <option value={4}>Z - A</option>
                            </select>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className={styles.SearchResultsModule_results}>
                    {/* map이 필요한 영역일 것 같음 */}
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                    <li className={styles.SearchResultsModule_results_item}>
                      <PromoF />
                    </li>
                  </ul>
                  <div className={styles.SearchResultsModule_pagination}>
                    <div className={styles.SearchResultsModule_previousPage}>
                      <span>
                        <svg className="chevron" id="chevron" viewBox="0 0 9 14">
                          <g>
                            <path d="M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <div className={`${styles.SearchPagination_previousPage} + ${styles.currentPage}`}>
                      <Link to={'#'}> 1 </Link>
                    </div>
                    <div className={styles.SearchPagination_nextPage}>
                      <Link to={'#'}> 2 </Link>
                    </div>
                    <div className={styles.SearchPagination_nextPage}>
                      <Link to={'#'}> 3 </Link>
                    </div>
                    <span className={styles.SearchPagination_separator}>...</span>
                    <div className={styles.SearchPagination_nextPage}>
                      <Link to={'#'}> 24 </Link>
                    </div>
                    <div className={styles.SearchResultsModule_nextPage}>
                      <Link to={'#'}>
                        <svg className="chevron" id="chevron" viewBox="0 0 9 14">
                          <g>
                            <path d="M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z"></path>
                          </g>
                        </svg>
                        <span>Next</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SearchLandingPage;