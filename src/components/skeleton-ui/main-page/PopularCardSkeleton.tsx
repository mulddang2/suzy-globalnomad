import Skeleton from '../Skeleton';
import * as styles from './PopularCardSkeleton.css';

const PopularCardSkeleton = () => {
  return (
    <Skeleton className={styles.popularSkeleton}>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonHeader}>
          <div className={styles.skeletonStar} />
        </div>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonFooter}>
          <p className={styles.skeletonUser} />
          <span className={styles.skeletonDivider}>/</span>
          <p className={styles.skeletonRating} />
        </div>
      </div>
    </Skeleton>
  );
};

export default PopularCardSkeleton;
