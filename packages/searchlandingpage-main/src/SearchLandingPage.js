import styles from './css/searchlandingpage.module.css';

import SearchResultsModule_aside from '@sean/search-result-module-aside'

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
                              <option value={0} selected>Relevance</option>
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
                      <div className={styles.PromoF}></div>
                    </li>
                  </ul>
                  <div className={styles.SearchResultsModule_pagination}></div>
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