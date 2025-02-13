import { axiosInstance } from '@/apis/axios-instance';
import { ActivitiesReviews } from '@/types/activities-reviews';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useActivitiesReviews = (activityId: number | null, page: number) => {
  return useQuery<ActivitiesReviews>({
    queryKey: ['activities-reviews', activityId, page], // 페이지 값 추가
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/activities/${activityId}/reviews?page=${page}&size=3`);
      return data;
    },
    placeholderData: keepPreviousData,
  });
};
