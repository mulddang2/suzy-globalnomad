'use client';

import ActivityCardList from '@/components/main-page/ActivityCardList';
import ActivitySearch from '@/components/main-page/ActivitySearch';
import MainBanner from '@/components/main-page/MainBanner';
import PopularActivityList from '@/components/main-page/PopularActivityList';
import SearchResultList from '@/components/main-page/SearchResultList';
import { Suspense, useEffect, useState } from 'react';
import { wrapper } from './page.css';

const MainPage = () => {
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordFromURL = params.get('keyword') || '';
    setKeyword(keywordFromURL);
  }, []);

  return (
    <Suspense>
      <div className={wrapper}>
        <MainBanner />
        <ActivitySearch setKeyword={setKeyword} />
        {keyword.trim() ? (
          <>
            <SearchResultList keyword={keyword} />
          </>
        ) : (
          <>
            <PopularActivityList />
            <ActivityCardList />
          </>
        )}
      </div>
    </Suspense>
  );
};

export default MainPage;
