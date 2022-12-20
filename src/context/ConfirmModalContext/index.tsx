import { PropsWithChildren, createContext, useContext, useState } from 'react';
import type { ConfirmModalContextProps } from '../../types';

const ConfirmModalContext = createContext<ConfirmModalContextProps>(null);

export const ConfirmModalContextProvider = function (props: PropsWithChildren) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [proceedToDelete, setProceedToDelete] = useState(false);

  return (
    <ConfirmModalContext.Provider
      value={{
        showConfirmModal,
        setShowConfirmModal,
        proceedToDelete,
        setProceedToDelete,
      }}>
      {props.children}
    </ConfirmModalContext.Provider>
  );
};

export default ConfirmModalContext;
