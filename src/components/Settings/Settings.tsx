import { useContext, useEffect } from 'react';
import { DELETED_ALL_CLIPS } from '../../constants';
import { DELETE_ALL_CLIPS_CONFIRM } from '../../constants';
import {
  ClipContext,
  ConfirmModalContext,
  SettingsContext,
  ToastContext,
} from '../../context';
import { AiFillTool, MdDelete } from '../../icons/index';
import SlideButton from '../SlideButton/SlideButton';
import './Settings.scss';

const Settings = function () {
  const { settingsModalOpen, confirmSwitchOn, toggleConfirmSwitch } =
    useContext(SettingsContext);
  const { clips, deleteAllClips } = useContext(ClipContext);
  const {
    proceedToDeleteAll,
    setConfirmMessage,
    setShowConfirmModal,
    setProceedToDeleteAll,
  } = useContext(ConfirmModalContext);
  const { handleToast } = useContext(ToastContext);

  const handleDeleteAllClips = function () {
    if (clips.length === 0) return;

    /* Delete all clips */
    deleteAllClips();

    /* Show toast notification */
    handleToast(true, DELETED_ALL_CLIPS);

    /* Reset proceed to delete all value to false */
    setProceedToDeleteAll(false);
  };

  /* If the confirm switch is on, show the delete confirmation modal before deleting */
  const handleDeleteAllConfirmation = function () {
    setConfirmMessage(DELETE_ALL_CLIPS_CONFIRM);
    setShowConfirmModal(true);
  };

  /* 
   If the user proceeds to delete the clip, via the confirmation modal,
   only then delete.
  */
  useEffect(() => {
    if (proceedToDeleteAll) {
      handleDeleteAllClips();
    }
  }, [proceedToDeleteAll]);

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
            onClick={
              confirmSwitchOn
                ? handleDeleteAllConfirmation
                : handleDeleteAllClips
            }>
            <span>Delete All Clips</span>
            <span className="delete-icon-container">
              <MdDelete className="delete-icon--settings" />
            </span>
          </button>
        </div>
        <div className="settings__option">
          <button
            className="settings--confirm-before-delete"
            onClick={toggleConfirmSwitch}>
            <span className={`${confirmSwitchOn ? 'title--on' : 'title-off'}`}>
              Confirm before delete?
            </span>
            <span>
              <SlideButton />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
