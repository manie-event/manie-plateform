import { ERROR_MESSAGES } from '~/constants/errorMessages';
import type { errorDetail, errorModel } from '~/models/errorModel';

const errorMessageArray = ref<errorDetail[]>([]);

const addError = (error: errorModel) => {
  error.errors.forEach((err: errorDetail) => {
    const parsedError = {
      ...err,
      message: ERROR_MESSAGES[err.message as keyof typeof ERROR_MESSAGES] || err.message,
    };
    errorMessageArray.value.push(parsedError);

    setTimeout(() => {
      const index = errorMessageArray.value.indexOf(parsedError);
      if (index > -1) errorMessageArray.value.splice(index, 1);
    }, 5000);
  });
};

export const useErrorToaster = () => {
  return {
    errorMessageArray,
    addError,
  };
};
