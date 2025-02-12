import { ActivitiesReviews } from '@/types/activities-reviews';
import Image from 'next/image';
import React from 'react';

export default function ReviewCardList({ reviewsData }: { reviewsData: ActivitiesReviews }) {
  return (
    <div>
      {reviewsData.reviews.map((review) => {
        return (
          review && (
            <div key={review.id}>
              <div>
                <Image
                  width={45}
                  height={45}
                  src={review.user.profileImageUrl}
                  alt={`${review.user.nickname}의 프로필 이미지`}
                />
              </div>
              <p>
                {review.user.nickname} | {review.createdAt}
              </p>
              <p>{review.content}</p>
            </div>
          )
        );
      })}
    </div>
  );
}
