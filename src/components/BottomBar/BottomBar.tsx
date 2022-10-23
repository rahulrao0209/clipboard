import { FaPencilAlt } from 'react-icons/fa';
import './BottomBar.scss';

const BottomBar = function () {
  return (
    <div className="bottom-bar">
      <div className="add-btn">
        <FaPencilAlt className="pencil-icon" />
      </div>
    </div>
  );
};

export default BottomBar;
