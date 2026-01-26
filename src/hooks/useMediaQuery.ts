import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponsiveQuery = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isPc = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1199px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return {
    isPc: isMounted ? isPc : false,
    isTablet: isMounted ? isTablet : false,
    isMobile: isMounted ? isMobile : false,
  };
};

export default useResponsiveQuery;
