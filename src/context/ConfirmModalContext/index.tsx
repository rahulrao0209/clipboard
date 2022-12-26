import { PropsWithChildren, createContext, useContext, useState } from 'react';
import type { ConfirmModalContextProps } from '../../types';

const ConfirmModalContext = createContext<ConfirmModalContextProps>(null);

export const ConfirmModalContextProvider = function (props: PropsWithChildren) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [proceedToDelete, setProceedToDelete] = useState(false);
  const [proceedToDeleteAll, setProceedToDeleteAll] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState('');

  return (
    <ConfirmModalContext.Provider
      value={{
        showConfirmModal,
        setShowConfirmModal,
        proceedToDelete,
        setProceedToDelete,
        proceedToDeleteAll,
        setProceedToDeleteAll,
        confirmMessage,
        setConfirmMessage,
      }}>
      {props.children}
    </ConfirmModalContext.Provider>
  );
};

export default ConfirmModalContext;
