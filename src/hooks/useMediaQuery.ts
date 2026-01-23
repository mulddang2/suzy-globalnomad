import { useMediaQuery } from 'react-responsive';

const useResponsiveQuery = () => {
  const isPc = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1199px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767px)',
  });
  return { isPc, isTablet, isMobile };
};

export default useResponsiveQuery;
