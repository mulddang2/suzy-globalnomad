'use client';

import IconLocation from '@/assets/icons/location.svg';
import KakaoMap from '@/components/kakao-map/KakaoMap';
import Rating from '@/components/rating/Rating';
import { useMyActivitiesDetails } from '@/hooks/use-my-activities-details';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import * as styles from './page.css';

export default function DetailPage() {
  const { id } = useParams();

  const { data: activity, isLoading } = useMyActivitiesDetails(id ? Number(id) : null);

  return (
    <>
      {!isLoading && activity?.data ? (
        <div className={styles.detailPageContainer}>
          <div className={styles.detailPageBox}>
            <span className={styles.detailCategory}>{activity.data.category}</span>
            <h2 className={styles.detailTitle}>{activity.data.title}</h2>
            <div className={styles.ratingLocationLayout}>
              <Rating rating={activity.data.rating} reviewCount={activity.data.reviewCount} small />
              <div className={styles.locationLayout}>
                <div className={styles.locationBox}>
                  <IconLocation />
                </div>
                <span>{activity.data.address}</span>
              </div>
            </div>
            <div className={styles.activityImageLayout}>
              <div className={styles.bannerImageBox}>
                <Image
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  src={activity.data.bannerImageUrl}
                  alt={`${activity.data.title} 배너 이미지`}
                />
              </div>
              {activity.data.subImages && (
                <div className={styles.subImageBox}>
                  {activity.data.subImages.map(
                    (subImage: { imageUrl: string | undefined }, index: number | null | undefined) =>
                      subImage.imageUrl && (
                        <div key={index} className={styles.subImageWrapper}>
                          <Image
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src={subImage.imageUrl}
                            alt={`${activity.data.title} 서브 이미지`}
                          />
                        </div>
                      ),
                  )}
                </div>
              )}
            </div>
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
                <span>{activity.data.address}</span>
              </div>
            </div>
            <div className={styles.horizontalLine}></div>
          </div>
        </div>
      ) : (
        <div>로딩 중...</div>
      )}
    </>
  );
}
