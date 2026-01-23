import { axiosInstance } from '@/apis/axios-instance';
import { queries } from '@/lib/query-keys';
import { useAuthStore } from '@/stores/useAuthStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UseActivitiesReservationsProps {
  activityId: number;
  scheduleId: number;
  headCount: number;
}

export const useActivitiesReservations = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ activityId, scheduleId, headCount }: UseActivitiesReservationsProps) => {
      const token = useAuthStore.getState().accessToken;

      if (!token) {
        alert('로그인 후 예약 가능합니다.');
        throw new Error('로그인이 필요합니다.');
      }

      return await axiosInstance.post(`/activities/${activityId}/reservations`, {
        scheduleId,
        headCount,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queries.activities.schedule._def });
    },
  });
};
