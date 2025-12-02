import ActivityCard from '@/components/main-page/ActivityCard';
import Pagination from '@/components/pagination/Pagination';
import ActivityCardSkeleton from '@/components/skeleton-ui/main-page/ActivityCardSkeleton';
import { CATEGORY_EMOJI } from '@/constants/categories';
import { SECTION_TITLES } from '@/constants/text';
import { usePageActivity } from '@/hooks/use-activity-list';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as styles from './ActivityCardList.css';
import CategoryFilter from './CategoryFilter';

type SortOption = 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest';

function ActivityCardList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [currentPageNum, setCurrentPageNum] = useState(() => {
    const page = searchParams.get('page');
    return page ? Number(page) - 1 : 0;
  });
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return searchParams.get('category') || '';
  });
  const [sortOption, setSortOption] = useState(() => {
    return (searchParams.get('sort') as SortOption) || 'most_reviewed';
  });
  const offset = 8;

  const {
    data: allActivityList,
    isFetching,
    isError,
    error,
  } = usePageActivity(currentPageNum, offset, selectedCategory, sortOption);

  useEffect(() => {
    const category = searchParams.get('category');
    const sortOption = searchParams.get('sort');
    const page = searchParams.get('page');

    if (category) {
      setSelectedCategory(category);
    }
    if (sortOption && ['most_reviewed', 'price_asc', 'price_desc', 'latest'].includes(sortOption)) {
      setSortOption(sortOption as SortOption);
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

  const handlePageChange = (page: number) => setCurrentPageNum(page - 1);

  const handleCategoryClick = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setCurrentPageNum(0);

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

    setSortOption(apiSortKey);
    setCurrentPageNum(0);

    updateQueryParams({ sort: apiSortKey || undefined, page: 1 });
  };

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
          onSortChange={handleSortChange}
        />
        <h2 className={styles.container}>
          <span>{selectedCategory ? CATEGORY_EMOJI[selectedCategory] : SECTION_TITLES.ALL_ACTIVITY.emoji}</span>
          <span>{selectedCategory || SECTION_TITLES.ALL_ACTIVITY.text}</span>
        </h2>
      </div>
      <div className={styles.gridContainer}>
        {isFetching
          ? Array.from({ length: offset }, (_, index) => <ActivityCardSkeleton key={index} />)
          : activities.map((activity) => <ActivityCard key={activity.id} cardData={activity} />)}

        {!isFetching &&
          activities.length > 0 &&
          Array.from({ length: offset - activities.length }).map((_, index) => (
            <div key={`empty-${index}`} aria-hidden='true' style={{ visibility: 'hidden' }}>
              <ActivityCardSkeleton />
            </div>
          ))}

        {activities.length === 0 && !isFetching && (
          <div className={styles.noActivities}>신청할 수 있는 체험이 없습니다.</div>
        )}
      </div>
      {totalCount !== 0 && (
        <Pagination
          currentPage={currentPageNum + 1}
          totalCount={totalCount}
          offsetLimit={offset}
          setPageNum={handlePageChange}
          currentPageGroup={0}
        />
      )}
    </section>
  );
}

export default ActivityCardList;
