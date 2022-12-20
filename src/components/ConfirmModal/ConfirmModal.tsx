import { useContext } from 'react';
import { ConfirmModalContext, SettingsContext } from '../../context';
import { GiCheckMark } from '../../icons';
import './ConfirmModal.scss';

const ConfirmModal = function () {
  const { confirmSwitchOn, toggleConfirmSwitch } = useContext(SettingsContext);
  const { showConfirmModal, setShowConfirmModal, setProceedToDelete } =
    useContext(ConfirmModalContext);

  if (!showConfirmModal) return null;

  const handleDelete = function () {
    setProceedToDelete(true);
    setShowConfirmModal(false);
  };

  const handleCancel = function () {
    setProceedToDelete(false);
    setShowConfirmModal(false);
  };

  return (
    <>
      <div className="backdrop"></div>
      <div className="confirm-modal">
        <h3>Are you sure you want to delete the clip?</h3>
        <p>
          <span
            className="confirm-modal__checkbox"
            onClick={toggleConfirmSwitch}>
            {!confirmSwitchOn && <GiCheckMark className="check-icon" />}
          </span>
          <span>Do not ask me again.</span>
        </p>
        <div className="confirm-modal__buttons">
          <button
            className="confirm-modal__buttons--delete"
            onClick={handleDelete}>
            Delete
          </button>
          <button
            className="confirm-modal__buttons--cancel"
            onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
