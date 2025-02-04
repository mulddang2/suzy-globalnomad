'use client';

import ActivityCardList from '@/components/mainPage/ActivityCardList';
import ActivitySearch from '@/components/mainPage/ActivitySearch';
import MainBanner from '@/components/mainPage/MainBanner';
import PopularActivityList from '@/components/mainPage/PopularActivityList';
import SearchResultList from '@/components/mainPage/SearchResultList';
import { useEffect, useState } from 'react';
import { wrapper } from './page.css';

const MainPage = () => {
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keywordFromURL = params.get('keyword') || '';
    setKeyword(keywordFromURL);
  }, []);

  return (
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
  );
};

export default MainPage;
