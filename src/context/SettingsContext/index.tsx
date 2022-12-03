import { PropsWithChildren, createContext, useState } from 'react';
import type { SettingsContextProps } from '../../types';

const SettingsContext = createContext<SettingsContextProps>(null);

export const SettingsContextProvider = function (props: PropsWithChildren) {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const toggleSettingsModal = function () {
    setSettingsModalOpen(!settingsModalOpen);
  };

  const closeSettingsModal = function () {
    if (settingsModalOpen) {
      setSettingsModalOpen(false);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settingsModalOpen,
        toggleSettingsModal,
        closeSettingsModal,
      }}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
