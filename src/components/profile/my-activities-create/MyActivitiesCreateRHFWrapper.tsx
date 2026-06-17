import MyActivitiesCreate from '@/components/profile/my-activities-create/MyActivitiesCreate';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  options: string[];
  onSubmit?: (data: unknown) => void;
}

export default function MyActivitiesCreateRHFWrapper({ options, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    control,
    trigger,
  } = useForm();

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit?.(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <MyActivitiesCreate
        trigger={trigger}
        options={options}
        register={register}
        errors={errors}
        clearErrors={clearErrors}
        control={control}
        setValue={setValue}
      />
      <button type='submit' style={{ display: 'none' }} />
    </form>
  );
}
