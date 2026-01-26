import dayjs from 'dayjs';

export type ReservationDateTime = {
  id?: number;
  frontEndId?: string;
  date: dayjs.Dayjs | null;
  startTime: dayjs.Dayjs | null;
  endTime: dayjs.Dayjs | null;
};
