export type ActivityInfo = {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
};

export type ActivityResponse = {
  activities: ActivityInfo[];
  totalCount: number;
};

export type CurrentViewedActivity = {
  id: number;
  title?: string;
  price?: number;
  bannerImageUrl: string;
  rating?: number;
  reviewCount?: number;
};
