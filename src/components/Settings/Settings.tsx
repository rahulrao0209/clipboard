import { useContext } from 'react';
import { SettingsContext } from '../../context';
import './Settings.scss';

const Settings = function () {
  const { settingsModalOpen } = useContext(SettingsContext);

  console.log(settingsModalOpen);
  return (
    <div
      className={`settings ${
        settingsModalOpen ? 'settings--open' : 'settings--close'
      }`}></div>
  );
};

export default Settings;
