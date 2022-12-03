import { createContext, useState } from 'react';
import type { SettingsContextProps } from '../../types';

const SettingsContext = createContext<SettingsContextProps>(null);

export const SettingsContextProvider = function (props: any) {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const toggleSettingsModal = function () {
    setSettingsModalOpen(!settingsModalOpen);
  };

  return (
    <SettingsContext.Provider
      value={{
        settingsModalOpen,
        toggleSettingsModal,
      }}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
