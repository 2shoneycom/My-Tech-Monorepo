import { useEffect, useState } from "react";
import styles from "./css/heroslide_typeA.module.css";

function Heroslide_typeA({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = data[currentIndex];

  const [isPlaying, setIsPlaying] = useState(true); // 재생/일시정지 상태 관리
  const [progress, setProgress] = useState(0); // 0 ~ 100 퍼센트 상태 관리

  // -------------------------------------------------------
  // 1. 타이머 로직: 단순히 progress 숫자만 올림 (순수 로직)
  // -------------------------------------------------------
  useEffect(() => {
    let interval;

    if (isPlaying && data.length > 0) {
      interval = setInterval(() => {
        // 여기서는 오직 progress만 증가시킵니다. (다른 state 건드리지 않음)
        setProgress((prev) => prev + (100 / (6000 / 10))); 
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isPlaying, data.length]);

  // -------------------------------------------------------
  // 2. 감시자 로직: progress가 100이 되면 슬라이드 넘김
  // -------------------------------------------------------
  useEffect(() => {
    if (progress >= 100) {
      // 1. 슬라이드 넘기기
      setCurrentIndex((prevIndex) => 
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      // 2. 게이지 초기화
      setProgress(0);
    }
  }, [progress, data.length]); // progress가 변할 때마다 검사

  // -------------------------------------------------------
  // 3. 수동 조작 핸들러
  // -------------------------------------------------------
  const handleSlideClick = (index) => {
    setCurrentIndex(index);
    setProgress(0); // 사용자가 직접 누르면 게이지 0부터 다시 시작
    // 사용자 클릭 시 일시정지를 풀고 싶다면 setIsPlaying(true) 추가
  };

  return (
    <div className={styles.hero_container}>
      {/* background layer */}
      <div className={styles.hero_layer1}>
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className={styles.bg_image} // CSS에 이미지 스타일 필요
        />
      </div>
      {/* info & nav layer */}
      <div className={styles.hero_layer2}>
        {/* description info */}
        <div className={styles.description_area}>
          <div className={styles.description_content_area}>
            <div className={styles.description_content}>
              <div className={styles.title}>{currentSlide.title}</div>
              <div className={styles.details}>{currentSlide.desc}</div>
              <div className={styles.readmore_area}>
                <button
                  className={styles.readmore}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* navigation */}
        <div className={styles.navigation_area}>
          <div className={styles.navigation_flex_box}>
            {data.map((item, index) => (
              <div
                key={item.id}
                className={styles.navigation_item_box}
                onClick={() => handleSlideClick(index)}
                // (선택) 현재 활성화된 슬라이드면 스타일 다르게 주기
                style={{ opacity: index === currentIndex ? 1 : 0.5, cursor: 'pointer' }}
              >
                <div className={styles.navigation_slider}>
                  {/* 현재 슬라이드일 때만 progress 값을 적용, 아니면 0% */}
                  <div
                    className={styles.progress_bar}
                    style={{
                      width: index === currentIndex ? `${progress}%` : '0%'
                    }}
                  ></div>
                </div>
                <div className={styles.navigation_title}>{item.title}</div>
              </div>
            ))}
            <button
              className={styles.play_pause}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                // 일시정지 아이콘 (현재 재생 중일 때 보임)
                <svg id="nav-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M13.5 3V13C13.5 13.2652 13.3946 13.5196 13.2071 13.7071C13.0196 13.8946 12.7652 14 12.5 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H12.5C12.7652 2 13.0196 2.10536 13.2071 2.29289C13.3946 2.48043 13.5 2.73478 13.5 3ZM6 2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H6C6.26522 14 6.51957 13.8946 6.70711 13.7071C6.89464 13.5196 7 13.2652 7 13V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2Z"></path>
                </svg>
              ) : (
                // 재생 아이콘 (현재 멈춤 상태일 때 보임)
                <svg id="nav-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M22.5 12C22.5006 12.2546 22.4353 12.5051 22.3105 12.727C22.1856 12.949 22.0055 13.1348 21.7875 13.2665L8.28 21.5297C8.05227 21.6691 7.79144 21.7452 7.52445 21.7502C7.25746 21.7551 6.99399 21.6887 6.76125 21.5578C6.53073 21.4289 6.3387 21.2409 6.2049 21.0132C6.07111 20.7855 6.00039 20.5263 6 20.2622V3.73779C6.00039 3.47368 6.07111 3.21445 6.2049 2.98673C6.3387 2.75902 6.53073 2.57106 6.76125 2.44217C6.99399 2.31124 7.25746 2.24482 7.52445 2.24977C7.79144 2.25471 8.05227 2.33084 8.28 2.47029L21.7875 10.7334C22.0055 10.8651 22.1856 11.051 22.3105 11.2729C22.4353 11.4949 22.5006 11.7453 22.5 12Z"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroslide_typeA;