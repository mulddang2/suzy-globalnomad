import { MyActivities } from '@/types/my-activities';
import { MyActivitiesEditData } from '@/types/my-activities-edit-data';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useMyActivitiesEdit } from './use-my-activities-edit';
import { useMyActivitiesDetails } from './useMyActivitiesDetails';
import { uploadImage } from './useUploadImage';

interface UseActivityEditFormParams {
  activityId: number;
}

export interface ActivityEditFormValues {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  bannerImage: string | File;
  subImages: {
    id?: number;
    src: string;
    file?: File;
  }[];
  availableDateTimeList: {
    id?: number;
    frontEndId: string;
    date: dayjs.Dayjs | null;
    startTime: dayjs.Dayjs | null;
    endTime: dayjs.Dayjs | null;
  }[];
}

export const useActivityEditForm = ({ activityId }: UseActivityEditFormParams) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
    clearErrors,
    control,
    trigger,
  } = useForm<ActivityEditFormValues>({
    defaultValues: {
      title: '',
      category: '',
      description: '',
      price: 0,
      address: '',
      bannerImage: '',
      subImages: [],
      availableDateTimeList: [],
    },
  });

  const { data: currentData, status } = useMyActivitiesDetails(activityId);
  const mutation = useMyActivitiesEdit();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (!isDataLoaded && status === 'success' && currentData) {
      const myActivities = currentData.data as MyActivities;

      const formmattedData = {
        title: myActivities.title,
        category: myActivities.category,
        description: myActivities.description,
        price: myActivities.price,
        address: myActivities.address,
        bannerImage: myActivities.bannerImageUrl,
        subImages: myActivities.subImages.map((subImage) => ({
          id: subImage.id,
          src: subImage.imageUrl,
          file: undefined,
        })),
        availableDateTimeList: [
          {
            frontEndId: `${Date.now()}-${Math.random()}`,
            date: null,
            startTime: null,
            endTime: null,
          },
          ...myActivities.schedules.map((schedule) => ({
            id: schedule.id,
            frontEndId: `${Date.now()}-${Math.random()}`,
            date: dayjs(schedule.date, 'YYYY-MM-DD'),
            startTime: dayjs(schedule.startTime, 'HH:mm'),
            endTime: dayjs(schedule.endTime, 'HH:mm'),
          })),
        ],
      };

      reset(formmattedData);
      setIsDataLoaded(true);
    }
  }, [currentData, isDataLoaded, status, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (newData) => {
    if (!currentData) return;
    const myActivities = currentData!.data as MyActivities;

    try {
      // 1. 배너 이미지 처리
      let bannerImageUrl = newData.bannerImage;

      if (newData.bannerImage instanceof File) {
        bannerImageUrl = await uploadImage(newData.bannerImage);
        if (!bannerImageUrl) {
          alert('배너 이미지 업로드에 실패했습니다.');
          return;
        }
      }

      // 2. 소개 이미지 업로드
      const subImageUploadPromises = newData.subImages.map(async (image: any) => {
        if (image.file) {
          return await uploadImage(image.file);
        }
        return null;
      });

      const uploadedSubImages = await Promise.all(subImageUploadPromises);
      const subImageUrlsToAdd = uploadedSubImages.filter((url) => url !== null) as string[];

      // 3. 삭제된 소개 이미지
      const curDataSubImageIds = newData.subImages.map((img: any) => img.id);
      const subImageIdsToRemove = myActivities.subImages
        .filter((img) => !curDataSubImageIds.includes(img.id))
        .map((img) => img.id);

      // 4. 스케줄 삭제 대상 찾기
      const newDataSchedulesIds = newData.availableDateTimeList.map((s: any) => s.id);
      const scheduleIdsToRemove = myActivities.schedules
        .filter((s) => !newDataSchedulesIds.includes(s.id))
        .map((s) => s.id);

      // 5. 스케줄 추가 대상 찾기
      const schedulesToAdd = newData.availableDateTimeList
        .filter((s: any) => !s.id && s.date && s.startTime && s.endTime)
        .map((s: any) => ({
          date: s.date.format('YYYY-MM-DD'),
          startTime: s.startTime.format('HH:mm'),
          endTime: s.endTime.format('HH:mm'),
        }));

      const myActivitiesEditData: MyActivitiesEditData = {
        title: newData.title,
        category: newData.category,
        description: newData.description,
        address: newData.address,
        price: Number(newData.price),
        bannerImageUrl,
        subImageIdsToRemove,
        subImageUrlsToAdd,
        scheduleIdsToRemove,
        schedulesToAdd,
      };

      await mutation.mutateAsync({ activityId, data: myActivitiesEditData });
    } catch (error: any) {
      console.error('Submit Error:', error);

      const errorMessage = error.response?.data?.message || '수정 중 오류가 발생했습니다.';
      alert(errorMessage);
    }
  };
  return {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting: mutation.isPending },
    setValue,
    getValues,
    trigger,
    onSubmit,
    isDataLoaded,
    isSuccess: mutation.isSuccess,
    clearErrors,
  };
};
