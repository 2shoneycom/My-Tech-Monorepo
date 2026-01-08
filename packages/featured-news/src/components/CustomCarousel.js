import { useState, useEffect, useRef, Children } from "react";
import styles from "../css/customCarousel.module.css";

function CustomCarousel({ children, gap = 10 }) {
  // ---------------------------------------------------------
  // 1. 화면 크기에 따라 슬라이드 개수 계산 로직 
  // ---------------------------------------------------------
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const totalItems = Children.count(children); // 자식 요소(슬라이드 아이템) 개수 세기
  const slideCount = Math.ceil(totalItems / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;  // 현재 브라우저의 너비

      if (width >= 1340) {
        setItemsPerSlide(4);
        setTransOffset(100);
      }
      else if (width >= 1024) {
        setItemsPerSlide(3);
        setTransOffset(100);
      }
      else if (width >= 568) {
        setItemsPerSlide(2);
        setTransOffset(100);
      }
      else {
        setItemsPerSlide(1);
        setTransOffset(82.5);
      }
    };

    handleResize(); // 컴포넌트 처음 뜰 때 한 번 실행

    window.addEventListener("resize", handleResize);  // 화면 크기 바뀔 때마다 실행되도록 리스너 부착

    // 뒷정리 (Cleanup): 컴포넌트 사라질 때 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------------------------------------------------------
  // 2. 슬라이드 이동 효과 구현
  // ---------------------------------------------------------
  const [curSlide, setCurSlide] = useState(0);

  // ---------------------------------------------------------
  // 3. 드래그 효과 구현
  // ---------------------------------------------------------
  const [isDragging, setIsDragging] = useState(false); // 드래그 중인가?
  const [startX, setStartX] = useState(0);             // 드래그 시작 X 좌표
  const [dragOffset, setDragOffset] = useState(0);     // 드래그로 움직인 거리 (px)
  const [transOffset, setTransOffset] = useState(100);
  const dragMovedRef = useRef(false);
  const transformValue = `translateX(calc(${curSlide} * (-${transOffset}% - ${gap}px) + ${dragOffset}px))`;

  const onDragStart = (e) => {
    setIsDragging(true);
    // 마우스 이벤트와 터치 이벤트를 구분해서 X좌표를 가져옴
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(pageX);

    // ★ 드래그 시작할 땐 "아직 안 움직였음"으로 초기화
    dragMovedRef.current = false;
  };

  const onDragMove = (e) => {
    if (!isDragging) return; // 드래그 중이 아니면 무시

    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const moveX = pageX - startX; // 움직인 거리 = 현재 위치 - 시작 위치
    setDragOffset(moveX);

    // 움직인 거리가 5px 이상이면 "이건 드래그다!"라고 표시
    if (Math.abs(moveX) > 5) {
      dragMovedRef.current = true;
    }
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const DRAG_THRESHOLD = 100; // 100px 이상 움직여야 넘어감 (감도 조절)

    // 왼쪽으로 많이 끌었으면 (Next)
    if (dragOffset < -DRAG_THRESHOLD) {
      // 마지막 페이지가 아닐 때만 이동
      if (curSlide < slideCount - 1) {
        setCurSlide((prev) => prev + 1);
      }
    }
    // 오른쪽으로 많이 끌었으면 (Prev)
    else if (dragOffset > DRAG_THRESHOLD) {
      // 첫 페이지가 아닐 때만 이동
      if (curSlide > 0) {
        setCurSlide((prev) => prev - 1);
      }
    }

    // 드래그 거리 초기화 (이때 transition이 먹히면서 부드럽게 제자리 or 다음자리로 감)
    setDragOffset(0);
  };

  const onMouseLeave = () => {
    if (isDragging) onDragEnd();
  };

  // ---------------------------------------------------------
  // 링크 클릭 차단 핸들러
  // ---------------------------------------------------------
  // ★ 중요: 링크 클릭 방지 로직을 껍데기에서 한방에 해결 (Capture Phase)
  // 자식 컴포넌트에 일일이 handleLinkClick을 안 달아도 됩니다.
  const handleClickCapture = (e) => {
    if (dragMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className={styles.carousel_slider}>
      {/* Carousel */}
      <div
        className={styles.flickity_viewport}
        // 마우스/터치 이벤트 연결
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onMouseLeave}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
        onClickCapture={handleClickCapture}
      >
        <div
          className={styles.flickity_slider}
          style={{
            transform: transformValue,
            transition: isDragging ? "none" : "transform 0.5s ease-out", // 드래그 중일 때는 애니메이션(transition)을 꺼야 딜레이 없이 손가락을 따라옴
            cursor: isDragging ? "grabbing" : "grab" // 커서 모양 변경
          }}
        >
          {/* 부모가 넣어준 알맹이(children)를 여기에 표시 */}
          {children}
        </div>
      </div>

      {/* Prev Button */}
      <button
        className={`${styles.flickity_button} ${styles.flickity_prev_next_button} ${styles.previous}`}
        onClick={() => setCurSlide(curSlide - 1)}
        style={curSlide === 0 ? { display: 'none' } : null}
      >
        <svg className={styles.flickity_button_icon} viewBox="0 0 100 100">
          <title>Previous</title>
          <path d="M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z" transform="translate(100, 100) rotate(180)"></path>
        </svg>
      </button>

      {/* Next Button */}
      <button
        className={`${styles.flickity_button} ${styles.flickity_prev_next_button} ${styles.next}`}
        onClick={() => setCurSlide(curSlide + 1)}
        style={curSlide === slideCount - 1 ? { display: 'none' } : null}
      >
        <svg className={styles.flickity_button_icon} viewBox="0 0 100 100">
          <title>Next</title>
          <path d="M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z" transform="translate(100, 100) rotate(180)"></path>
        </svg>
      </button>

      {/* Page Dot Buttons */}
      <div className={styles.flickity_page_dots}>
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            className={`${styles.flickity_page_dot}  ${index === curSlide ? styles.is_selected : ""}`}
            onClick={() => setCurSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;