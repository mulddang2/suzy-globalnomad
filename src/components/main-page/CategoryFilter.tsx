import { CATEGORY_LIST } from '@/constants/categories';
import { MouseEvent } from 'react';
import * as styles from './CategoryFilter.css';

const SORT_OPTIONS = ['가격 낮은 순', '가격 높은 순'];
interface CategoryFilterProps {
  currentCategory: string;
  onSelectCategory: (e: MouseEvent<HTMLButtonElement>) => void;
  onSetSort: (sortKey: string) => void;
}

const CategoryFilter = ({ currentCategory, onSelectCategory, onSetSort }: CategoryFilterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.categoryWrapper}>
        <div className={styles.categoryList}>
          {CATEGORY_LIST.map((category) => {
            return (
              <button
                className={`${styles.categoryButton} ${currentCategory === category ? styles.activeCategoryButton : ''}`}
                type='button'
                key={category}
                value={category}
                onClick={onSelectCategory}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className={styles.popoverWrapper} />
      </div>

      {/* <div className={styles.sortWrapper}>
        <DropDownB
          options={SORT_OPTIONS}
          placeholder='가격'
          onSelect={(item: string) => {
            const sortKey = item === '가격 낮은 순' ? 'price_asc' : 'price_desc';
            onSetSort(sortKey);
          }}
        />
      </div> */}
    </div>
  );
};

export default CategoryFilter;
