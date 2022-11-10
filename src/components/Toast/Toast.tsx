import { useContext } from 'react';
import { ToastContext } from '../../context';
import './Toast.scss';

const Toast = function () {
  const { showToast, toastMessage } = useContext(ToastContext);

  return toastMessage ? (
    <div className={`toast ${showToast ? 'toast-animate' : ''}`}>
      <span className="toast__message">{toastMessage}</span>
    </div>
  ) : null;
};

export default Toast;
