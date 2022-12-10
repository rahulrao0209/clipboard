import { useContext } from 'react';
import { SettingsContext } from '../../context';
import './SlideButton.scss';

const SlideButton = function () {
  const { confirmSwitchOn } = useContext(SettingsContext);
  return (
    <div className={`slide-button ${confirmSwitchOn ? 'on' : 'off'}`}></div>
  );
};

export default SlideButton;
