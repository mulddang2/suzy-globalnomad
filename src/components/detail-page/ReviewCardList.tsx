import defaultUserImage from '@/assets/images/default-user.png';
import { ActivitiesReviews } from '@/types/activities-reviews';
import Image from 'next/image';
import * as styles from './ReviewCardList.css';
import dayjs from 'dayjs';

export default function ReviewCardList({ reviewsData }: { reviewsData: ActivitiesReviews }) {

  if (!reviewsData) {
    return <div>리뷰가 없습니다.</div>;
  }

  return (
    <div>
      {reviewsData.reviews.map((review) => {
        return (
          review && (
            <div key={review.id}>
              <div className={styles.profileImageBox}>
                {review.user.profileImageUrl ? (
                  <Image
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={review.user.profileImageUrl}
                    alt={`${review.user.nickname}의 프로필 이미지`}
                  />
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
              <p>
                {review.user.nickname} | {dayjs(review.createdAt).format('YYYY.MM.DD')}
              </p>
              <p>{review.content}</p>
            </div>
          )
        );
      })}
    </div>
  );
}
