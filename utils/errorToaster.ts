import { ERROR_MESSAGES } from '~/constants/errorMessages';
import type { errorDetail, ServerError } from '~/models/errorModel';

const errorMessageArray = ref<errorDetail[]>([]);

const addError = (error: ServerError) => {
  if ('errors' in error && Array.isArray(error.errors)) {
    error.errors.forEach((err: errorDetail) => {
      const parsedError = {
        id: Date.now() + Math.random(),
        ...err,
        message: ERROR_MESSAGES[err.message as keyof typeof ERROR_MESSAGES] || err.message,
      };
      errorMessageArray.value.push(parsedError);

      setTimeout(() => {
        errorMessageArray.value = errorMessageArray.value.filter((e) => e.id !== parsedError.id);
      }, 5000);
    });
  } else if ('message' in error) {
    const parsedError = {
      id: Date.now() + Math.random(),
      message: ERROR_MESSAGES[error.message as keyof typeof ERROR_MESSAGES] || error.message,
    };
    errorMessageArray.value = [parsedError];

    setTimeout(() => {
      errorMessageArray.value = [];
    }, 5000);
  } else {
    console.warn("Format d'erreur non supporté:", error);
  }
};

export const useErrorToaster = () => {
  return {
    errorMessageArray,
    addError,
  };
};
