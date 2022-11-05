import { FaPencilAlt } from '../../icons';
import type { BottomBarProps } from '../../types';
import './BottomBar.scss';

const BottomBar = function ({ toggleAddClipWindow }: BottomBarProps) {
  return (
    <div className="bottom-bar">
      <div role="button" className="add-btn" onClick={toggleAddClipWindow}>
        <FaPencilAlt className="pencil-icon" />
      </div>
      <span className="add-btn__back-layer"></span>
    </div>
  );
};

export default BottomBar;
