import { getAvailableSchedule } from '@/apis/activities-api';
import type { GetAvailableScheduleParams } from '@/apis/activities-api';
import { queries } from '@/lib/query-keys';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useAvailableSchedule = ({ activityId, year, month }: GetAvailableScheduleParams) => {
  return useQuery({
    ...queries.activities.schedule(activityId, year, month),
    queryFn: () => getAvailableSchedule({ activityId, year, month }),
    placeholderData: keepPreviousData, // 이전달 데이터 유지
    enabled: !!activityId && !!year && !!month,
  });
};
