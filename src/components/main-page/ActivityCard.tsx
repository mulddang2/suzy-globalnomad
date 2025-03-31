import { ActivityInfo } from '@/types/mainpage';
import priceToWon from '@/utils/pricetowon';
import {
  CurrentViewedActivity,
  getCurrentViewedActivity,
  getRecentlyViewedActivities,
  setCurrentViewedActivity,
  setRecentlyViewedActivities,
} from '@/utils/recent-activities';
import Image from 'next/image';
import { useState } from 'react';
import defaultImage from '../../assets/images/fallback-image.jpg';
import Rating from '../rating/Rating';
import * as styles from './ActivityCard.css';

interface ActivityCardProps {
  cardData: ActivityInfo;
}

const ActivityCard = ({ cardData: { id, title, price, bannerImageUrl, rating, reviewCount } }: ActivityCardProps) => {
  const handleClick = () => {
    setCurrentViewedActivity({ id, title, price, bannerImageUrl, rating, reviewCount });
    const viewedActivity = getCurrentViewedActivity();

    if (viewedActivity) {
      let viewedList = getRecentlyViewedActivities();

      viewedList = viewedList.filter((activity: CurrentViewedActivity) => activity.id !== viewedActivity.id);
      viewedList.unshift(viewedActivity);

      if (viewedList.length > 6) {
        viewedList = viewedList.slice(0, 6);
      }

      setRecentlyViewedActivities(viewedList);
    }

    window.location.href = `/activity/${id}`;
  };

  const [imageSrc, setImageSrc] = useState(bannerImageUrl || defaultImage.src);

  return (
    <div className={styles.activityCardWrapper} onClick={handleClick}>
      <div className={styles.activityCardInnerWrapper}>
        <div className={styles.activityCardImageBox}>
          <Image
            className={styles.activityCardImage}
            onError={() => {
              if (imageSrc !== defaultImage.src) {
                setImageSrc(defaultImage.src);
              }
            }}
            src={imageSrc}
            alt={title || '활동 이미지'}
            fill
            sizes='(max-width: 992px) 30vw, 289px'
          />
        </div>
        <div className={styles.activityCardDetails}>
          <div className={styles.ratingWrapper}>
            <Rating rating={rating} reviewCount={reviewCount} small />
          </div>
          <div className={styles.activityTitle}>{title}</div>
          <div className={styles.priceWrapper}>
            {priceToWon(price)}
            <span className={styles.perPersonText}>/인</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
