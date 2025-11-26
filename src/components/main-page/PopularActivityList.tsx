'use client';

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

function PopularActivityList() {
  const PAGE = 1;
  const SIZE = 10;

  const { data } = useQuery({
    queryKey: ['popularActivity', PAGE, SIZE],
    queryFn: getPopularActivity,
  });
  const [, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>{SECTION_TITLES.POPULAR_ACTIVITY.emoji}</span>
          <span>{SECTION_TITLES.POPULAR_ACTIVITY.text}</span>
        </h2>
        <div className={styles.swiperNavigationButtons}>
          <div className='swiper-button-prev'>
            <button className={isBeginning ? styles.buttonDisabled : styles.buttonActive} disabled={isBeginning}>
              <SwiperPrevButton width={11} hight={22} stroke='currentColor' />
            </button>
          </div>
          <div className='swiper-button-next'>
            <button className={isEnd ? styles.buttonDisabled : styles.buttonActive} disabled={isEnd}>
              <SwiperNextButton width={11} hight={22} stroke='currentColor' />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(e) => {
          setSwiper(e);
        }}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 32,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
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
        slidesOffsetAfter={0}
        className='swiperContainer'
      >
        {data?.activities.map((activity) => (
          <SwiperSlide key={activity.id} className={styles.slideItem}>
            <PopularActivityCard cardData={activity} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularActivityList;
