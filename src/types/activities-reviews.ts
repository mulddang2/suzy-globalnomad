export type ActivitiesReviews = {
  reviews: Array<{
    id: number;
    user: {
      id: number;
      nickname: string;
      profileImageUrl: string;
    };
    activityId: number;
    content: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
  }>;
  totalCount: number;
  averageRating: number;
};
