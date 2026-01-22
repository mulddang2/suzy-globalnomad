import { axiosInstance } from '@/apis/axios-instance';
import { MyActivitiesEditData } from '@/types/my-activities-edit-data';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useMyActivitiesEdit = () => {
  const queryClient = useQueryClient();


  return useMutation({
    mutationFn: async ({ activityId, data }: { activityId: number; data: MyActivitiesEditData }) => {

      return axiosInstance.patch(`/my-activities/${activityId}`, data,);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['my-activities', variables.activityId] });
    },
  });
};
