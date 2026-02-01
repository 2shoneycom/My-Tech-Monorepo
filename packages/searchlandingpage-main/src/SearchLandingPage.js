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
                <div className={styles.SearchResultsModule_main}></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SearchLandingPage;