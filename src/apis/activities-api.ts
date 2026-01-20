import { TimeSlot } from '@/types/activities';
import { axiosInstance } from './axios-instance';

export interface GetAvailableScheduleParams {
  activityId: number;
  year: number | string;
  month: number | string;
}

export interface AvailableSchedule {
  date: string;
  times: TimeSlot[];
}

export const getAvailableSchedule = async ({ activityId, year, month }: GetAvailableScheduleParams) => {
  const { data } = await axiosInstance.get<AvailableSchedule[]>(`/activities/${activityId}/available-schedule`, {
    params: { year, month: String(month).padStart(2, '0') },
  });
  return data;
};
