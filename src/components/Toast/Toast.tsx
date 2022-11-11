import { useContext } from 'react';
import {
  ADDED_NEW_CLIP,
  COPIED_TO_CLIPBOARD,
  DELETED_CLIP,
  UPDATED_CLIP,
} from '../../constants';
import { ToastContext } from '../../context';
import { FaPencilAlt, MdContentCopy, MdDelete } from '../../icons';
import './Toast.scss';

/* Provide the icon and color based on the toast message */
const getToastMessageStyles = function (message: string) {
  if (!message) return;

  switch (message) {
    case ADDED_NEW_CLIP:
      return {
        color: '#0d65c4',
        icon: <FaPencilAlt />,
      };

    case UPDATED_CLIP:
      return {
        color: '#0d65c4',
        icon: <FaPencilAlt />,
      };

    case DELETED_CLIP:
      return {
        color: '#d33636',
        icon: <MdDelete />,
      };

    case COPIED_TO_CLIPBOARD:
      return {
        color: '#34a853',
        icon: <MdContentCopy />,
      };

    default:
      return {};
  }
};

const createToastMessage = function (message: string) {
  const { color, icon } = getToastMessageStyles(message);
  return (
    <div className="toast__message" style={{ color }}>
      <span className="toast__message-icon">{icon}</span>
      <span className="toast__message-text">{message}</span>
    </div>
  );
};

const Toast = function () {
  const { showToast, toastMessage } = useContext(ToastContext);

  return toastMessage ? (
    <div className={`toast ${showToast ? 'toast-animate' : ''}`}>
      {createToastMessage(toastMessage)}
    </div>
  ) : null;
};

export default Toast;
