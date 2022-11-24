import { createContext, useState } from 'react';

const SettingsContext = createContext(null);

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
