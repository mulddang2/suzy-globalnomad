import { axiosInstance } from '@/apis/axios-instance';
import { useAuthStore } from '@/stores/useAuthStore';

export const fetchMyActivities = async (pageParam = null) => {
  try {
    const token = useAuthStore.getState().accessToken;

    if (!token) {
      throw new Error('No access token found');
    }

    const url = pageParam ? `/my-activities?size=5&cursorId=${pageParam}` : `/my-activities?size=5`;

    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching getMyActivities:', error);
    throw error;
  }
};
