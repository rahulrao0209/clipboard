import { createContext, useEffect, useState } from 'react';

const ToastContext = createContext(null);

export const ToastContextProvider = function (props: any) {
  const [showToast, setShowToast] = useState<boolean>();
  const [toastMessage, setToastMessage] = useState('');
  let toastTimeout: number;

  const handleToast = function (show: boolean, message: string) {
    setToastMessage(message);
    setShowToast(show);

    /* Hide the toast and reset the message empty after the timeout expires */
    toastTimeout = window.setTimeout(() => {
      setToastMessage('');
      setShowToast(false);
    }, 1000);
  };

  /* Clear the timeout when component unmounts */
  useEffect(() => {
    () => clearTimeout(toastTimeout);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toastMessage,
        handleToast,
      }}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContext;
