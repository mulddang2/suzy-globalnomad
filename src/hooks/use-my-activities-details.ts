import { axiosInstance } from '@/apis/axios-instance';
import { MyActivities } from '@/types/my-activities';
import { useQuery } from '@tanstack/react-query';

export const useMyActivitiesDetails = (activityId: number | null) => {
  return useQuery({
    queryKey: ['my-activities', activityId],
    queryFn: async () => {
      return await axiosInstance.get<MyActivities>(`/activities/${activityId}`);
    },
    enabled: Boolean(activityId),
  });
};
