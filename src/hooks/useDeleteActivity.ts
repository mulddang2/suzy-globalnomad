import { axiosInstance } from '@/apis/axios-instance';
import { useMutation } from '@tanstack/react-query';

export const useDeleteActivity = () =>
  useMutation({
    mutationFn: (id: number) => {
      return axiosInstance.delete(`/my-activities/${id}`);
    },
  });
