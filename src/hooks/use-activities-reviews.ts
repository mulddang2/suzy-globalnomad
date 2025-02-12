import { axiosInstance } from '@/apis/axios-instance';
import { useQuery } from '@tanstack/react-query';

export const useActivitiesReviews = (activityId: number | null) => {
  return useQuery({
    queryKey: ['activities-reviews', activityId],
    queryFn: async () => {
      return await axiosInstance.get(`/activities/${activityId}/reviews`);
    },
  });
};
