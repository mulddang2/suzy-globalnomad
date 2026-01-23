import { CATEGORY_LIST } from '@/constants/categories';
import useResponsiveQuery from '@/hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Dropdown from '../dropdown/Dropdown';
import * as styles from './CategoryFilter.css';

interface CategoryFilterProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  onSortChange: (sortKey: string) => void;
}

const CategoryFilter = ({ currentCategory, onSelectCategory, onSortChange }: CategoryFilterProps) => {
  const { isPc } = useResponsiveQuery();
  const [isMounted, setIsMounted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCategoryClick = (category: string) => {
    const nextCategory = currentCategory === category ? '' : category;
    onSelectCategory(nextCategory);
  };

  return (
    <div>
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
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className={styles.priceDropdownWrapper}>
            <Dropdown
              onSelectItem={onSortChange}
              headerTitle='정렬'
              list={['최신 순', '리뷰 많은 순', '높은 가격 순', '낮은 가격 순']}
            />
          </div>
        </div>
      ) : (
        <div className={styles.mobileLayout}>
          <div className={styles.mobileCategoryWrapper}>
            <div className={`${styles.mobileCategoryList} ${isEnd ? styles.mobileCategoryRemovePseudo : ''}`}>
              <Swiper
                modules={[Scrollbar]}
                observer={true}
                observeParents={true}
                touchStartPreventDefault={true}
                nested={true}
                touchRatio={1}
                touchAngle={45}
                slidesOffsetAfter={0}
                threshold={5}
                preventClicks={false}
                preventClicksPropagation={false}
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
                onSlideChange={(swiper) => {
                  setIsEnd(swiper.isEnd);
                }}
                scrollbar={{ draggable: true, hide: true }}
                allowTouchMove={true}
                noSwiping={false}
                watchSlidesProgress={true}
                navigation={{ nextEl: '.swiper-button-next' }}
              >
                {CATEGORY_LIST.map((category) => {
                  return (
                    // 슬라이더 드래그 미작동 이슈로 실제로는 버튼에 onClick 이벤트를 걸지 않고, SwiperSlide에 걸어줌
                    // button 태그는 접근성 때문에 추가
                    <SwiperSlide
                      key={category}
                      className={styles.mobileCategoryItem}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <button
                        type='button'
                        className={`${styles.mobileCategoryButton} ${currentCategory === category ? styles.activeCategoryButton : ''}`}
                      >
                        {category}
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className={styles.priceDropdownWrapper}>
            <Dropdown
              headerTitle='정렬'
              list={['최신 순', '리뷰 많은 순', '높은 가격 순', '낮은 가격 순']}
              onSelectItem={onSortChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
