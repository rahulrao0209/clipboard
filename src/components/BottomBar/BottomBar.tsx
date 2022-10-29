import { FaPencilAlt } from '../../icons';
import './BottomBar.scss';

const BottomBar = function () {
  return (
    <div className="bottom-bar">
      <div role="button" className="add-btn">
        <FaPencilAlt className="pencil-icon" />
      </div>
      <span className="add-btn__back-layer"></span>
    </div>
  );
};

export default BottomBar;
