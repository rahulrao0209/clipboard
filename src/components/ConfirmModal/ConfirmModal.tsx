import { GiCheckMark } from '../../icons';
import './ConfirmModal.scss';

const ConfirmModal = function () {
  return (
    <div className="confirm-modal">
      <div className="backdrop"></div>
      <h3>Are you sure you want to delete the clip?</h3>
      <p>
        <span className="confirm-modal__checkbox">
          <GiCheckMark className="check-icon" />
        </span>
        <span>Do not ask me again.</span>
      </p>
      <div className="confirm-modal__buttons">
        <button className="confirm-modal__buttons--delete">Delete</button>
        <button className="confirm-modal__buttons--cancel">Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
