import { toast } from 'react-toastify';

export const setError = (text: string, time: number) => {
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
