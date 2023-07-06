import { breakpoints } from '@/constants';
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const matchedBreakpoint = Object.entries(breakpoints).find(([_, breakpoint]) => width <= breakpoint);

      if (matchedBreakpoint) {
        setScreenSize(matchedBreakpoint[0]);
      } else {
        setScreenSize(null);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
