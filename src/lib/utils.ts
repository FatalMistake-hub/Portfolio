import { RefObject, useEffect, useState } from 'react'
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      console.log(`isMobile: ${mobile}`);
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    }
  }, []);
  
  return isMobile;
};

export const useClickOutside = (
  ref: RefObject<HTMLElement | undefined>,
  callback: () => void,
  addEventListener = true,
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback()
    }
  }

  useEffect(() => {
    if (addEventListener) {
      document.addEventListener('click', handleClick)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
