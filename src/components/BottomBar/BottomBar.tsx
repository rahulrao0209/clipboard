import { useContext } from 'react';
import ClipWindowContext from '../../context/ClipWindowContext';
import { FaPencilAlt } from '../../icons';
import './BottomBar.scss';

const BottomBar = function () {
  const { setClipId, toggleAddClipWindow } = useContext(ClipWindowContext);

  const handleCreate = function () {
    /* 
      Set the clip id as empty as this function is fired only for
      creating/adding new clips 
    */
    setClipId('');
    toggleAddClipWindow();
  };

  return (
    <div className="bottom-bar">
      <div role="button" className="add-btn" onClick={handleCreate}>
        <FaPencilAlt className="pencil-icon" />
      </div>
      <span className="add-btn__back-layer"></span>
    </div>
  );
};

export default BottomBar;
