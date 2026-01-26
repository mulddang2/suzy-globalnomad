import { axiosInstance } from '@/apis/axios-instance';

export const uploadImage = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const res = await axiosInstance.post('/activities/image', formData);
    return res.data.activityImageUrl;
  } catch (error) {
    console.error('이미지 업로드에 실패했습니다......', error);
    return null;
  }
};
