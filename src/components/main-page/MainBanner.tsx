import useGetActivities from '@/apis/get-activities';
import fallbackImage from '@/assets/images/fallback-image.jpg';
import loadingSpinner from '@/assets/images/loading-spinner.webp';
import Image from 'next/image';
import * as styles from './MainBanner.css';

const MainBanner = () => {
  const calendarNum = new Date().getMonth() + 1;
  const { data, isLoading } = useGetActivities({
    method: 'cursor',
    cursorId: null,
    size: 1,
    sort: 'most_reviewed',
  });
  const bannerImageUrl = data?.activities[0]?.bannerImageUrl;

  return (
    <div className={styles.bannerWrapper}>
      {!isLoading && bannerImageUrl && (
        <Image
          src={bannerImageUrl || fallbackImage}
          alt={data?.activities[0]?.title || '배너 이미지'}
          priority
          fetchPriority='high'
          width={1920}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      )}

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <Image src={loadingSpinner} alt='로딩 중' width={80} height={80} />
        </div>
      )}

      <div className={styles.overlay} />

      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{isLoading ? '로딩 중입니다..' : data?.activities[0]?.title || '체험 제목'}</h1>
          <p className={styles.subtitle}>{`${calendarNum}월의 인기 체험🔥`}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
