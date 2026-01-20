import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queries = createQueryKeyStore({
  activities: {
    schedule: (activityId, year, month) => [activityId, year, month],
  },
});
