import styles from './css/search_module_result_aside.module.css';

function SearchResultsModule_aside() {
  return (
    <aside className={styles.SearchResultsModule_aside}>
      <div className={styles.SearchResultsModule_filter}>
        <div className={styles.SearchResultsModule_filter_header_wrapper}>
          <div className={styles.SearchResultsModule_filter_header}>
            <div className={styles.SearchResultsModule_filter_title}>
              Filters
            </div>
            <button className={styles.SearchResultsModule_filters_toggle}>
              <span>Filters</span>
              <svg id="close-x" viewBox="0 0 14 14">
                <title>Close</title>
                <g>
                  <path fillRule="nonzero" d="M6.336 7L0 .664.664 0 7 6.336 13.336 0 14 .664 7.664 7 14 13.336l-.664.664L7 7.664.664 14 0 13.336 6.336 7z"></path>
                </g>
              </svg>
            </button>
            <div className={`${styles.SearchResultsModule_applied} ${styles.data_mobile_hidden}`}>
              <div className={styles.SearchResultsModule_applied_heading}>
                Applied filters
              </div>
              <button className={styles.SearchResultsModule_applied_reset}>
                Reset
              </button>
              <ul className={styles.SearchResultsModule_applied_list}>
                {/* applied filters item list space */}
              </ul>
            </div>
            <div className={`${styles.SearchResultsModule_aside_search} ${styles.data_mobile_hidden}`}>
              <svg id="icon-magnify" viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd" transform="translate(1.667 1.667)">
                  <circle cx="7.708" cy="7.708" r="5.208" stroke="currentColor" stroke-width="1.5" transform="rotate(-45 7.708 7.708)"></circle>
                  <path fill="currentColor" fill-rule="nonzero" d="M11.243 11.244c.325-.325.853-.325 1.178 0l2.357 2.357c.326.326.326.853 0 1.179-.325.325-.853.325-1.178 0l-2.357-2.357c-.326-.326-.326-.853 0-1.179z"></path>
                </g>
              </svg>
              <input className={styles.SearchResultsModule_aisde_search_input}
                type='text' name='q'
                placeholder='Keyword search' aria-label='search'
              />
              <div className={styles.SearchResultsModule_aside_search_clear}>x</div>
            </div>
          </div>
        </div>
        <div className={styles.SearchResultsModule_filter_content_wrapper}>
          <div className={styles.SearchResultsModule_filter_content}>
            {/* map으로 치환해야하는 부분 */}
            <div className={styles.SearchFilter}>
              <div>
                <div className={styles.SearchFilter_content}>
                  <div className={styles.SearchFilter_heading}>
                    <span>Research Area</span>
                    <div className={styles.plus_sign}>
                      {/* ::before */}
                      {/* ::after */}
                    </div>
                  </div>
                  <ul className={styles.SearchFilter_items}>
                    {/* map으로 치환해야하는 부분 */}
                    <li className={styles.SearchFilter_items_item}>
                      <div className={styles.SearchFilterInput}>
                        <div className={styles.CheckboxInput}>
                          <label className={styles.CheckboxInput_label}><input type='checkbox' name='' value='' /><span>Conversational AI&nbsp(304)</span></label>
                        </div>
                      </div>
                    </li>
                    <li className={styles.SearchFilter_items_item}>
                      <div className={styles.SearchFilterInput}>
                        <div className={styles.CheckboxInput}>
                          <label className={styles.CheckboxInput_label}><input type='checkbox' name='' value='' /><span>Machine learning&nbsp(157)</span></label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.SearchFilter}>
              <div>
                <div className={styles.SearchFilter_content}>
                  <div className={styles.SearchFilter_heading}>
                    <span>Tag</span>
                    <div className={styles.plus_sign}>
                      {/* ::before */}
                      {/* ::after */}
                    </div>
                  </div>
                  <ul className={styles.SearchFilter_items}>
                    {/* map으로 치환해야하는 부분 */}
                    <li className={styles.SearchFilter_items_item}>
                      <div className={styles.SearchFilterInput}>
                        <div className={styles.CheckboxInput}>
                          <label className={styles.CheckboxInput_label}><input type='checkbox' name='' value='' /><span>Alexa&nbsp(147)</span></label>
                        </div>
                      </div>
                    </li>
                    <li className={styles.SearchFilter_items_item}>
                      <div className={styles.SearchFilterInput}>
                        <div className={styles.CheckboxInput}>
                          <label className={styles.CheckboxInput_label}><input type='checkbox' name='' value='' /><span>Natural-language understanding(NLU)&nbsp(86)</span></label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SearchResultsModule_aside;