import useGetActivities from '@/apis/get-activities';
import loadingSpinner from '@/assets/images/loading-spinner.gif';
import Image from 'next/image';
import * as styles from './MainBanner.css';

const MainBanner = () => {
  const calendarNum = new Date().getMonth() + 1;
  const { data, isLoading, isError } = useGetActivities({
    method: 'cursor',
    cursorId: null,
    size: 1,
    sort: 'most_reviewed',
  });

  return (
    <div className={styles.bannerWrapper}>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <Image src={loadingSpinner} alt='로딩 중' width={80} height={80} />
        </div>
      ) : isError ? (
        <div className={styles.errorWrapper}>
          데이터를 불러오는데 실패하였습니다.
          <br />
          다시 시도해주세요.
        </div>
      ) : (
        <Image
          src={data?.activities[0].bannerImageUrl || loadingSpinner}
          alt={data?.activities[0].title || '배너 이미지'}
          fill
          priority
        />
      )}
      <div className={styles.overlay} />
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{isLoading ? '로딩 중입니다..' : data?.activities[0].title || '체험 제목'}</h1>
          <p className={styles.subtitle}>{`${calendarNum}월의 인기 체험🔥`}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
