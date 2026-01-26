'use client';

import CustomDrawer from '@/components/drawer/CustomDrawer';
import CardList from '@/components/profile/my-activities/CardList';
import useResponsiveQuery from '@/hooks/useMediaQuery';
import { StyledEngineProvider } from '@mui/material';
import { useRouter } from 'next/navigation';
import * as styles from './page.css';

export default function MyActivitiesPage() {
  const router = useRouter();
  const { isMobile } = useResponsiveQuery();

  const handleClick = () => {
    router.push('/profile/my-activities/create');
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.myActivitiesPageContainer}>
        <div className={styles.topLayout}>
          {isMobile ? (
            <>
              <div>
                <div className={styles.mobileMenuTitle}>
                  <CustomDrawer />
                  <h2 className={styles.h2Title}>체험 관리</h2>
                </div>
              </div>
              <button onClick={handleClick} className={styles.createButton}>
                체험 등록
              </button>
            </>
          ) : (
            <>
              <h2 className={styles.h2Title}>내 체험 관리</h2>
              <button onClick={handleClick} className={styles.createButton}>
                체험 등록하기
              </button>
            </>
          )}
        </div>

        {/* 내 예약 카드 리스트 */}
        <CardList />
      </div>
    </StyledEngineProvider>
  );
}
