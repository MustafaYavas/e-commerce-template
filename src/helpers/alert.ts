import { toast } from 'react-toastify';

export const setErrorAlert = (text: string, time: number) => {
  return toast.error(text, {
    position: 'top-center',
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const setSuccessAlert = (text: string, time: number) => {
  return toast.success(text, {
    position: 'top-center',
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
