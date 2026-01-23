import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useMyActivitiesDetails } from './useMyActivitiesDetails';
import { useMyActivitiesEdit } from './useMyActivitiesEdit';

interface UseActivityEditFormParams {
  activityId: number
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
  } = useForm();

  const { data: currentData, status } = useMyActivitiesDetails(activityId);
  const mutation = useMyActivitiesEdit();


}