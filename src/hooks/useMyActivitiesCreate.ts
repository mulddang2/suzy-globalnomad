import { axiosInstance } from '@/apis/axios-instance';
import { MyActivitiesCreateData } from '@/types/my-activities-create-data';
import { useMutation } from '@tanstack/react-query';

export const useMyActivitiesCreate = () =>
  useMutation({
    mutationFn: (data: MyActivitiesCreateData) => {
      return axiosInstance.post('/activities', data);
    },
  });
