import { useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useDeleteActivity } from './use-delete-activity';

export const useHandleDeleteActivity = () => {
  const mutation = useDeleteActivity();
  const queryClient = useQueryClient();

  const handleDelete = (id: number, onSuccess?: () => void) => {
    mutation.mutate(id, {
      onSuccess: () => {
        alert('삭제되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['my-activities'] });
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: (error: Error) => {
        const axiosError = error as AxiosError;
        const errorMessage = (axiosError.response?.data as { message: string })?.message ?? '삭제에 실패했습니다.';
        console.error('Error deleting activity:', error);
        alert(errorMessage);
      },
    });
  };

  return { handleDelete };
};
