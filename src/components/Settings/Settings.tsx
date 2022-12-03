import { useContext } from 'react';
import { DELETED_ALL_CLIPS } from '../../constants';
import { ClipContext, SettingsContext, ToastContext } from '../../context';
import { AiFillTool, MdDelete } from '../../icons/index';
import './Settings.scss';

const Settings = function () {
  const { settingsModalOpen } = useContext(SettingsContext);
  const { clips, deleteAllClips } = useContext(ClipContext);
  const { handleToast } = useContext(ToastContext);

  const handleDeleteAllClips = function () {
    if (clips.length === 0) return;

    /* Delete all clips */
    deleteAllClips();

    /* Show toast notification */
    handleToast(true, DELETED_ALL_CLIPS);
  };

  return (
    <div
      className={`settings ${
        settingsModalOpen ? 'settings--open' : 'settings--close'
      }`}>
      <div className="settings__title">
        <span className="settings-tool">
          <AiFillTool className="settings-tool-icon" />
        </span>
        <span>Settings</span>
      </div>
      <div className="settings__options">
        <div className="settings__option">
          <button
            className="settings--delete-all-btn"
            onClick={handleDeleteAllClips}>
            <span>Delete All Clips</span>
            <span className="delete-icon-container">
              <MdDelete className="delete-icon--settings" />
            </span>
          </button>
        </div>
        <div className="settings__option">
          <button className="settings--confirm-before-delete">
            Confirm before delete?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
