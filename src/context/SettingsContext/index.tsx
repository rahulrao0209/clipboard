import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import type { SettingsContextProps } from '../../types';

const SettingsContext = createContext<SettingsContextProps>(null);

export const SettingsContextProvider = function (props: PropsWithChildren) {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [confirmSwitchOn, setConfirmSwitchOn] = useState(
    JSON.parse(localStorage.getItem('confirmSwitchOn')) || false,
  );

  const toggleSettingsModal = function () {
    setSettingsModalOpen(!settingsModalOpen);
  };

  const closeSettingsModal = function () {
    if (settingsModalOpen) {
      setSettingsModalOpen(false);
    }
  };

  const toggleConfirmSwitch = function () {
    setConfirmSwitchOn(!confirmSwitchOn);
  };

  /* Save the value of the confirm switch status to local storage */
  useEffect(() => {
    localStorage.setItem('confirmSwitchOn', confirmSwitchOn);
  }, [confirmSwitchOn]);

  return (
    <SettingsContext.Provider
      value={{
        settingsModalOpen,
        confirmSwitchOn,
        toggleConfirmSwitch,
        toggleSettingsModal,
        closeSettingsModal,
      }}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
