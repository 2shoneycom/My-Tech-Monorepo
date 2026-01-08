import { useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 0;

function useSmartHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 70;
    
    // header-height variable value setting
    if (headerRef.current) {
      headerRef.current.style.setProperty('--header-height', `${headerHeight}px`);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // --- SCROLL DOWN LOGIC ---
      // If scrolling down AND past the header height, hide it.
      if (currentScrollY > lastScrollY.current && currentScrollY > headerHeight) {
        if (!isHidden) {
          setIsHidden(true);
        }
      }
      // --- SCROLL UP LOGIC ---
      // If scrolling up (or within the buffer at the very top), show it.
      else if (currentScrollY < lastScrollY.current - SCROLL_THRESHOLD) {
        if (isHidden) {
          setIsHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHidden]);

  return { isHidden, headerRef };
}

export default useSmartHeader;