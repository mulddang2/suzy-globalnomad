import ActivityCard from '@/components/main-page/ActivityCard';
import Pagination from '@/components/pagination/Pagination';
import ActivityCardSkeleton from '@/components/skeleton-ui/main-page/ActivityCardSkeleton';
import { SECTION_TITLES } from '@/constants/text';
import { usePageActivity } from '@/hooks/use-activity-list';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import * as styles from './ActivityCardList.css';
import CategoryFilter from './CategoryFilter';

const ActivityCardList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [currentPageNum, setCurrentPageNum] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const offset = 8;

  const {
    data: allActivityList,
    isFetching,
    isError,
    error,
  } = usePageActivity(currentPageNum, offset, selectedCategory, selectedSort);

  useEffect(() => {
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    const page = searchParams.get('page');

    if (category) {
      setSelectedCategory(category);
    }
    if (sort) {
      setSelectedSort(sort);
    }
    if (page) {
      setCurrentPageNum(Number(page) - 1);
    }
  }, [searchParams]);

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

  const handlePageChange = (page: number) => setCurrentPageNum(page);

  const handleCategoryClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const newCategory = selectedCategory === button.value ? '' : button.value;

    setSelectedCategory(newCategory);
    setCurrentPageNum(0);

    updateQueryParams({ category: newCategory || undefined, page: 1 });
  };

  // const handleSortClick = (sortKey: string) => {
  //   setSelectedSort(sortKey);
  //   setCurrentPageNum(0);

  //   updateQueryParams({ sort: sortKey, page: 1 });
  // };

  if (isError) {
    return <div>{(error as Error)?.message || '데이터를 가져오는 데 문제가 발생했습니다.'}</div>;
  }

  const activities = allActivityList?.activities || [];
  const totalCount = allActivityList?.totalCount || 0;

  return (
    <section className={styles.categoryListContainer}>
      <div>
        <CategoryFilter
          currentCategory={selectedCategory}
          onSelectCategory={handleCategoryClick}
          // onSetSort={handleSortClick}
        />
        <h2 className={styles.container}>
          <span className={styles.emoji}>{selectedCategory ? '' : SECTION_TITLES.ALL_ACTIVITY.emoji}</span>
          <span>{selectedCategory || SECTION_TITLES.ALL_ACTIVITY.text}</span>
        </h2>
      </div>
      <div className={styles.gridContainer}>
        {isFetching
          ? Array.from({ length: offset }, (_, index) => <ActivityCardSkeleton key={index} />)
          : activities.map((activity) => <ActivityCard key={activity.id} cardData={activity} />)}
        {activities.length === 0 && !isFetching && (
          <div className={styles.noActivities}>신청할 수 있는 체험이 없습니다.</div>
        )}
      </div>
      {totalCount !== 0 && (
        <Pagination
          currentPage={currentPageNum}
          totalCount={totalCount}
          offsetLimit={offset}
          setPageNum={handlePageChange}
          currentPageGroup={0}
        />
      )}
    </section>
  );
};

export default ActivityCardList;
