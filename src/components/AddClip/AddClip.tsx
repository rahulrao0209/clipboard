import { BiSend, MdDelete, TfiClose } from '../../icons';
import './AddClip.scss';

type AddClipProps = {
  showAddClipWindow: boolean;
  toggleAddClipWindow: () => void;
};

const AddClip = function ({
  showAddClipWindow,
  toggleAddClipWindow,
}: AddClipProps) {
  return (
    <div className={`add-clip ${showAddClipWindow ? '' : 'hide'}`}>
      <div className="add-clip__data">
        <div className="add-clip__title">
          <label htmlFor="title">Clip Name</label>
          <input type="text" placeholder="Title" id="title" />
        </div>
        <div className="add-clip__content">
          <label htmlFor="content">Clip Name</label>
          <textarea placeholder="Content" id="content" />
        </div>
      </div>

      <div className="add-clip__controls">
        <button className="add-clip__delete-btn">
          <MdDelete className="delete-icon" />
        </button>
        <button className="add-clip__send-btn">
          <BiSend className="send-icon" />
        </button>
        <button className="add-clip__close-btn" onClick={toggleAddClipWindow}>
          <TfiClose className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default AddClip;
