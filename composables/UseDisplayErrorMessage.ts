import type { AxiosError } from 'axios';

const { addError } = useToaster();

export const useDisplayErrorMessage = (error: AxiosError<any>) => {
  const message =
    error.response?.data?.errors[0]?.message ??
    error.response?.data?.errors.message ??
    'Une erreur est survenue.';

  addError({ message });
};
