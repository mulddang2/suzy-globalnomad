import PaginationPrevBtn from '@/assets/icons/arrow-left.svg';
import PaginationNextButton from '@/assets/icons/arrow-right.svg';
import ActivityCard from '@/components/main-page/ActivityCard';
import ActivityCardSkeleton from '@/components/skeleton-ui/main-page/ActivityCardSkeleton';
import { CATEGORY_EMOJI } from '@/constants/categories';
import { SECTION_TITLES } from '@/constants/text';
import { usePageActivity } from '@/hooks/useActivityList';
import { PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as styles from './ActivityCardList.css';
import CategoryFilter from './CategoryFilter';

type SortOption = 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest';

function ActivityCardList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const OFFSET = 8;

  const currentPageNum = Number(searchParams.get('page') || '1') - 1;
  const selectedCategory = searchParams.get('category') || '';
  const sortOption = (searchParams.get('sort') as SortOption) || 'most_reviewed';

  const [totalCount, setTotalCount] = useState(0);

  const {
    data: allActivityList,
    isFetching,
    isError,
    error,
  } = usePageActivity(currentPageNum, OFFSET, selectedCategory, sortOption);

  useEffect(() => {
    if (allActivityList?.totalCount) {
      setTotalCount(allActivityList.totalCount);
    }
  }, [allActivityList]);

  const updateQueryParams = (params: Record<string, string | number | undefined>) => {
    const newQuery = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined) {
        newQuery.delete(key);
      } else {
        newQuery.set(key, String(value));
      }
    });

    router.push(`${pathname}?${newQuery.toString()}`, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    updateQueryParams({ page });
  };

  const handleCategoryClick = (newCategory: string) => {
    updateQueryParams({ category: newCategory || undefined, page: 1 });
  };

  const handleSortChange = (sortKey: string) => {
    let apiSortKey: SortOption = 'most_reviewed';

    switch (sortKey) {
      case '리뷰 많은 순':
        apiSortKey = 'most_reviewed';
        break;
      case '낮은 가격 순':
        apiSortKey = 'price_asc';
        break;
      case '높은 가격 순':
        apiSortKey = 'price_desc';
        break;
      case '최신 순':
        apiSortKey = 'latest';
        break;
      default:
        apiSortKey = 'most_reviewed';
    }

    updateQueryParams({ sort: apiSortKey || undefined, page: 1 });
  };

  if (isError) {
    return <div>{(error as Error)?.message || '데이터를 가져오는 데 문제가 발생했습니다.'}</div>;
  }

  const activities = allActivityList?.activities || [];

  return (
    <section className={styles.categoryListContainer}>
      <div>
        <CategoryFilter
          currentCategory={selectedCategory}
          onSelectCategory={handleCategoryClick}
          onSortChange={handleSortChange}
        />
        <h2 className={styles.container}>
          <span>{selectedCategory ? CATEGORY_EMOJI[selectedCategory] : SECTION_TITLES.ALL_ACTIVITY.emoji}</span>
          <span>{selectedCategory || SECTION_TITLES.ALL_ACTIVITY.text}</span>
        </h2>
      </div>
      <div className={styles.gridContainer}>
        {isFetching
          ? Array.from({ length: OFFSET }, (_, index) => <ActivityCardSkeleton key={index} />)
          : activities.map((activity) => <ActivityCard key={activity.id} cardData={activity} />)}

        {activities.length === 0 && !isFetching && (
          <div className={styles.noActivities}>신청할 수 있는 체험이 없습니다.</div>
        )}
      </div>
      {totalCount > 0 && (
        <div className={styles.paginationContainer}>
          <Pagination
            count={Math.ceil(totalCount / OFFSET)}
            onChange={(_, page) => handlePageChange(page)}
            page={currentPageNum + 1}
            variant='outlined'
            shape='rounded'
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
        </div>
      )}
    </section>
  );
}

export default ActivityCardList;
