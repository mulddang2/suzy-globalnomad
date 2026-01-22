import { axiosInstance } from '@/apis/axios-instance';

export const fetchMyActivities = async (pageParam = null) => {
  try {
    const url = pageParam ? `/my-activities?size=5&cursorId=${pageParam}` : `/my-activities?size=5`;

    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching getMyActivities:', error);
    throw error;
  }
};
