// import 'swiper/css';
import MobileSwiperNextButton from '@/assets/icons/right-path-arrow.svg';
import { CATEGORY_LIST } from '@/constants/categories';
import useResponsiveQuery from '@/hooks/use-media-query';
import { MouseEvent, useEffect, useState } from 'react';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Dropdown from '../dropdown/Dropdown';
import * as styles from './CategoryFilter.css';

interface CategoryFilterProps {
  currentCategory: string;
  onSelectCategory: (e: MouseEvent<HTMLButtonElement>) => void;
  // onSetSort: (sortKey: string) => void;
}

const CategoryFilter = ({ currentCategory, onSelectCategory }: CategoryFilterProps) => {
  const { isPc } = useResponsiveQuery();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      {isPc ? (
        <div className={styles.pcLayout}>
          <ul className={styles.categoryList}>
            {CATEGORY_LIST.map((category) => {
              return (
                <li key={category} className={styles.categoryItem}>
                  <button
                    className={`${styles.categoryButton} ${currentCategory === category ? styles.activeCategoryButton : ''}`}
                    type='button'
                    value={category}
                    onClick={onSelectCategory}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>

          <Dropdown headerTitle='가격' list={['가격이 낮은 순', '가격이 높은 순']} />
        </div>
      ) : (
        <div className={styles.mobileLayout}>
          <div className={styles.mobileCategoryWrapper}>
            <div className={styles.mobileCategoryList}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                breakpoints={{
                  320: {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                  },
                  768: {
                    slidesPerView: 'auto',
                    spaceBetween: 14,
                  },
                }}
                pagination={{ type: 'custom' }}
                scrollbar={{ draggable: true, hide: true }}
                freeMode={true}
                allowTouchMove={true}
                watchSlidesProgress={true}
                preventClicksPropagation={true}
                navigation={{ nextEl: '.swiper-button-next' }}
              >
                {CATEGORY_LIST.map((category) => {
                  return (
                    <SwiperSlide className={styles.mobileCategoryItem} key={category}>
                      <button
                        className={`${styles.categoryButton} ${currentCategory === category ? styles.activeCategoryButton : ''}`}
                        type='button'
                        value={category}
                        onClick={onSelectCategory}
                      >
                        {category}
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <button className={`swiper-button-next ${styles.mobileCategoryNextButton}`}>
              <MobileSwiperNextButton width={13} height={10} stroke='currentColor' />
            </button>
          </div>
          <Dropdown headerTitle='가격' list={['가격이 낮은 순', '가격이 높은 순']} />
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
