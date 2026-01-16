import defaultUserImage from '@/assets/images/default-user.png';
import { ActivitiesReviews } from '@/types/activities-reviews';
import dayjs from 'dayjs';
import Image from 'next/image';
import * as styles from './ReviewCardList.css';

export default function ReviewCardList({ reviewsData }: { reviewsData: ActivitiesReviews }) {
  if (!reviewsData || reviewsData.reviews.length === 0) {
    return <div>리뷰가 없습니다.</div>;
  }

  return (
    <div className={styles.listWrapper}>
      {reviewsData.reviews.map((review) => {
        return (
          review && (
            <div key={review.id} className={styles.contentsLayout}>
              <div className={styles.profileImageBox}>
                {review.user.profileImageUrl ? (
                  <Image fill src={review.user.profileImageUrl} alt={`${review.user.nickname}의 프로필 이미지`} />
                ) : (
                  <Image
                    src={defaultUserImage}
                    alt='프로필 이미지'
                    className={styles.profileDefaultImage}
                    width={25}
                    height={25}
                  />
                )}
              </div>
              <div>
                <p className={styles.dateInfo}>
                  <span className={styles.nickName}>{review.user.nickname}</span> <span>|</span>
                  <span className={styles.dayCreated}>{dayjs(review.createdAt).format('YYYY.MM.DD')}</span>
                </p>
                <p className={styles.content}>{review.content}</p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
