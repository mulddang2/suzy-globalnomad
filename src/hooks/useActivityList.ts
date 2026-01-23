import getCurrentPageActivity from '@/apis/get-current-page-activity';
import { queryKeys } from '@/apis/querykeys';
import { ActivityResponse } from '@/types/mainpage';
import { useQuery } from '@tanstack/react-query';

export const usePageActivity = (pageNum: number, size: number, category: string, sort: string) => {
  return useQuery<ActivityResponse, Error>({
    queryKey: queryKeys.currentPageActivity(pageNum, size, category, sort),
    queryFn: () => getCurrentPageActivity(pageNum, size, category, sort),
    staleTime: 5 * 60 * 1000,
    placeholderData: { activities: [], totalCount: 0 },
  });
};
