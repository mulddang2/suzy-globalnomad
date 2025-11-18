'use client';

import useGetActivities from '@/apis/get-activities';
import getPopularActivity from '@/apis/get-popular-activity';
import SwiperPrevButton from '@/assets/icons/left-path-arrow.svg';
import SwiperNextButton from '@/assets/icons/right-path-arrow.svg';
import { SECTION_TITLES } from '@/constants/text';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import PopularActivityCard from './PopularActivityCard';
import * as styles from './PopularActivityList.css';

const PopularActivityList = () => {
  const PAGE = 1;
  const SIZE = 10;

  const { data } = useQuery({
    queryKey: ['popularActivity', PAGE, SIZE],
    queryFn: getPopularActivity,
  });
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{SECTION_TITLES.POPULAR_ACTIVITY}</h2>
        <div className={styles.swiperNavigationButtons}>
          <div className='swiper-button-prev'>
            <button className={isBeginning ? styles.buttonDisabled : styles.buttonActive} disabled={isBeginning}>
              <SwiperPrevButton stroke='currentColor' />
            </button>
          </div>
          <div className='swiper-button-next'>
            <button className={isEnd ? styles.buttonDisabled : styles.buttonActive} disabled={isEnd}>
              <SwiperNextButton stroke='currentColor' />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(e) => {
            setSwiper(e);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          spaceBetween={24}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(e) => {
            setIsBeginning(e.isBeginning);
            setIsEnd(e.isEnd);
          }}
          pagination={{ type: 'custom' }}
          scrollbar={{ draggable: true }}
          className='swiperContainer'
        >
          {data?.activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <PopularActivityCard cardData={activity} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularActivityList;
