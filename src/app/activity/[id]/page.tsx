'use client';

import PaginationPrevBtn from '@/assets/icons/arrow-left.svg';
import PaginationNextButton from '@/assets/icons/arrow-right.svg';
import IconLocation from '@/assets/icons/location.svg';
import StarFill from '@/assets/icons/star-fill.svg';
import ReservationSidebar from '@/components/detail-page/ReservationSidebar';
import ReviewCardList from '@/components/detail-page/ReviewCardList';
import KakaoMap from '@/components/kakao-map/KakaoMap';
import ImageWithFallback from '@/components/profile/common/ImageWithFallback';
import Rating from '@/components/rating/Rating';
import { useActivitiesReviews } from '@/hooks/use-activities-reviews';
import { useMyActivitiesDetails } from '@/hooks/use-my-activities-details';
import { CircularProgress, PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import * as styles from './page.css';

export default function DetailPage() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data: activity, isLoading } = useMyActivitiesDetails(id ? Number(id) : null);

  const { data: reviews } = useActivitiesReviews(id ? Number(id) : null, page);

  const [failedSubImageCount, setFailedSubImageCount] = useState(0);

  const reviewSummery = (averageRating: number) => {
    if (averageRating >= 4) {
      return '매우 만족';
    }
    if (averageRating >= 3) {
      return averageRating === 3 ? '보통' : '만족';
    }
    if (averageRating >= 2) {
      return averageRating === 2 ? '불만족' : '약간 불만족';
    }
    if (averageRating >= 1) {
      return '매우 불만족';
    }
    {
      return '평가 없음';
    }
  };

  return (
    <>
      <div className={styles.detailPageContainer}>
        <div className={styles.detailPageBox}>
          {!isLoading && activity?.data ? (
            <>
              <span className={styles.detailCategory}>{activity.data.category}</span>
              <h2 className={styles.detailTitle}>{activity.data.title}</h2>
              <div className={styles.ratingLocationLayout}>
                <Rating rating={activity.data.rating.toFixed(1)} reviewCount={activity.data.reviewCount} small />
                <div className={styles.locationLayout}>
                  <div className={styles.locationBox}>
                    <IconLocation />
                  </div>
                  <span className={styles.address}>{activity.data.address}</span>
                </div>
              </div>
              <div
                className={
                  failedSubImageCount === 0 && activity.data.subImages && activity.data.subImages.length > 0
                    ? styles.activityImageLayout
                    : styles.activityImageFullLayout
                }
              >
                <div className={styles.bannerImageBox}>
                  <ImageWithFallback
                    fill
                    src={activity.data.bannerImageUrl}
                    className={styles.image}
                    alt={`${activity.data.title} 배너 이미지`}
                  />
                </div>
                {activity.data.subImages && activity.data.subImages.length - failedSubImageCount > 0 && (
                  <div className={styles.subImageBox}>
                    {activity.data.subImages.map(
                      (subImage: { imageUrl: string | undefined }, index: number) =>
                        subImage.imageUrl && (
                          <div key={index} className={styles.subImageWrapper}>
                            <ImageWithFallback
                              fill
                              src={subImage.imageUrl}
                              hideOnError={true}
                              className={styles.image}
                              onError={() => setFailedSubImageCount((prev) => prev + 1)}
                              alt={`${activity.data.title} 서브 이미지`}
                            />
                          </div>
                        ),
                    )}
                  </div>
                )}
              </div>

              <div className={styles.bodyContainer}>
                <div className={styles.mainContent}>
                  <div className={styles.horizontalLine}></div>
                  <div className={styles.descLayout}>
                    <h3 className={styles.subheading}>체험 설명</h3>
                    <p className={styles.paragraph}>{activity.data.description}</p>
                  </div>

                  <div className={styles.horizontalLine}></div>

                  <div className={styles.mapLocationLayout}>
                    <div className={styles.mapContainer}>
                      <KakaoMap address={activity.data.address} />
                    </div>
                    <div className={styles.locationLayout}>
                      <div className={styles.locationBox}>
                        <IconLocation />
                      </div>
                      <span>{activity?.data.address}</span>
                    </div>
                  </div>
                  <div className={styles.horizontalLine}></div>

                  {reviews ? (
                    <>
                      <div className={styles.reviewCountLayout}>
                        <h3 className={styles.subheading}>후기</h3>
                        <div className={styles.ratingLayout}>
                          <p className={styles.averageRating}>{reviews.averageRating.toFixed(1)}</p>
                          <div className={styles.averageRatingLayout}>
                            <p>{reviewSummery(reviews.averageRating)}</p>

                            <div className={styles.ratingReviewLayout}>
                              <StarFill width={16} height={16} />
                              <p>{reviews.totalCount.toLocaleString()}개 후기</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ReviewCardList reviewsData={reviews} />

                      <Pagination
                        count={Math.ceil(reviews.totalCount / 3)}
                        page={page}
                        onChange={(_, value) => setPage(value)}
                        variant='outlined'
                        shape='rounded'
                        sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
                        renderItem={(item) => (
                          <PaginationItem
                            slots={{
                              previous: PaginationPrevBtn,
                              next: PaginationNextButton,
                            }}
                            sx={{
                              '&.Mui-selected': {
                                backgroundColor: '#0B3B2D',
                                color: 'white',
                              },
                              borderRadius: '8px',
                            }}
                            {...item}
                          />
                        )}
                      />
                    </>
                  ) : null}
                </div>

                <div className={styles.sidebarLayout}>
                  <ReservationSidebar price={activity.data.price} activityId={Number(id)} />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.loadingContainer}>
              <CircularProgress color='inherit' />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
