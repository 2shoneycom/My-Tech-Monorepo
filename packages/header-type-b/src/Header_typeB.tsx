import { useEffect, useState } from 'react';
import styles from './css/header_typeB.module.css';

function Header_typeB() {
  const [windowMode, setWindowMode] = useState("");

  useEffect(() => {
    // 미디어 쿼리 리스트 생성
    const desktopQuery = window.matchMedia('(min-width: 1280px)');
    const tabletQuery = window.matchMedia('(min-width: 768px)');

    // 상태를 업데이트하는 함수
    const updateMode = () => {
      if (desktopQuery.matches) {
        setWindowMode("desktop");
      } else if (tabletQuery.matches) {
        setWindowMode("tablet");
      } else {
        setWindowMode("mobile");
      }
    };

    // 1. 초기 실행 시점의 모드 설정
    updateMode();

    // 2. 창 크기가 변경될 때마다 실행되도록 리스너 등록
    desktopQuery.addEventListener('change', updateMode);
    tabletQuery.addEventListener('change', updateMode);

    // 3. 컴포넌트가 사라질 때 리스너 제거 (메모리 누수 방지)
    return () => {
      desktopQuery.removeEventListener('change', updateMode);
      tabletQuery.removeEventListener('change', updateMode);
    };
  }, []); // 빈 배열 []을 넣어 컴포넌트가 처음 나타날 때만 리스너를 등록합니다.

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          {/* 햄버거 메뉴 버튼 */}
          <button className={styles.menuButton}>
            <div id={styles.hamburgerIcon}></div>
          </button>

          {/* 로고 영역 */}
          <div id={styles.logo}></div>

          {/* 왼쪽 메인 메뉴 */}
          {windowMode === "desktop" &&
            <div className={styles.primaryNav}>
              <ul className={styles.menuList}>
                <li className={styles.menuItem}>
                  <button className={styles.menuButton}>
                    <div className={styles.buttonContent}>
                      <span className={styles.label}>템플릿</span>
                      <div className={styles.arrowIcon}>
                        <div id={styles.arrowIcon}></div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button className={styles.menuButton}>
                    <div className={styles.buttonContent}>
                      <span className={styles.label}>추천 기능</span>
                      <div className={styles.arrowIcon}>
                        <div id={styles.arrowIcon}></div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button className={styles.menuButton}>
                    <span className={styles.label}>기업용</span>
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button className={styles.menuButton}>
                    <span className={styles.label}>교육용</span>
                  </button>
                </li>
                <li className={styles.menuItem}>
                  <button className={styles.menuButton}>
                    <span className={styles.label}>요금제</span>
                  </button>
                </li>
              </ul>

              <div className={styles.divider}></div>

              <div className={styles.aiBadge}>
                <div id={styles.aiIcon}></div>
              </div>
            </div>
          }

          <div className={styles.spacer}></div>

          {/* 오른쪽 보조 메뉴 */}
          <div className={styles.secondaryNav}>
            <ul className={styles.menuList}>
              {windowMode === "desktop" &&
                <li className={styles.menuItem}>
                  <div id={styles.helpIcon}></div>
                </li>
              }
              <li className={styles.menuItem}>
                <button className={windowMode === "desktop" ? `${styles.menuButton}` : `${styles.menuButton} ${styles.registerBtn}`}>
                  <span className={styles.label}>로그인</span>
                </button>
              </li>
              {windowMode === "desktop" &&
                <li className={styles.menuItem}>
                  <button className={`${styles.menuButton} ${styles.registerBtn}`}>
                    <span className={styles.label}>회원가입</span>
                  </button>
                </li>
              }
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header_typeB;