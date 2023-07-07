import { breakpoints } from '@/constants';
import { useState, useEffect } from 'react';

type screenSize = 'small' | 'medium' | 'large';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('small' as screenSize);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth < breakpoints.small) {
        setScreenSize('small');
      } else if (innerWidth >= breakpoints.small && innerWidth < breakpoints.medium) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};
