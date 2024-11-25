import { RefObject, useEffect } from 'react'
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
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
