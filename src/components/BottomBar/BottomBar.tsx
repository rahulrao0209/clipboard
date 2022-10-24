import { FaPencilAlt } from 'react-icons/fa';
import './BottomBar.scss';

const BottomBar = function () {
  return (
    <div className="bottom-bar">
      <div className="add-btn">
        <FaPencilAlt className="pencil-icon" />
      </div>
      <span className="add-btn__back-layer"></span>
    </div>
  );
};

export default BottomBar;
