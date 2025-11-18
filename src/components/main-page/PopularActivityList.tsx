'use client';

import SwiperPrevButton from '@/assets/icons/left-path-arrow.svg';
import SwiperNextButton from '@/assets/icons/right-path-arrow.svg';
import { SECTION_TITLES } from '@/constants/text';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import PopularActivityCard from './PopularActivityCard';
import * as styles from './PopularActivityList.css';

const PopularActivityList = () => {
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
          <SwiperSlide>
            <PopularActivityCard
              cardData={{
                id: 1,
                userId: 1,
                title: 'Sample Activity 1',
                description: 'This is a sample activity description.',
                category: 'Adventure',
                price: 50000,
                address: '123 Sample St, Sample City',
                bannerImageUrl: '/src/assets/images/test-image-experience1.png',
                rating: 4.5,
                reviewCount: 120,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-02',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularActivityCard
              cardData={{
                id: 1,
                userId: 1,
                title: 'Sample Activity 1',
                description: 'This is a sample activity description.',
                category: 'Adventure',
                price: 50000,
                address: '123 Sample St, Sample City',
                bannerImageUrl: '/src/assets/images/test-image-experience1.png',

                rating: 4.5,
                reviewCount: 120,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-02',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularActivityCard
              cardData={{
                id: 1,
                userId: 1,
                title: 'Sample Activity 1',
                description: 'This is a sample activity description.',
                category: 'Adventure',
                price: 50000,
                address: '123 Sample St, Sample City',
                bannerImageUrl: '/src/assets/images/test-image-experience1.png',
                rating: 4.5,
                reviewCount: 120,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-02',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularActivityCard
              cardData={{
                id: 1,
                userId: 1,
                title: 'Sample Activity 1',
                description: 'This is a sample activity description.',
                category: 'Adventure',
                price: 50000,
                address: '123 Sample St, Sample City',
                bannerImageUrl: '/src/assets/images/test-image-experience1.png',
                rating: 4.5,
                reviewCount: 120,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-02',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularActivityCard
              cardData={{
                id: 1,
                userId: 1,
                title: 'Sample Activity 1',
                description: 'This is a sample activity description.',
                category: 'Adventure',
                price: 50000,
                address: '123 Sample St, Sample City',
                bannerImageUrl: '/sample1.jpg',
                rating: 4.5,
                reviewCount: 120,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-02',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularActivityList;
