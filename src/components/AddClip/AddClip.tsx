import { BiSend, MdDelete } from '../../icons';
import './AddClip.scss';

const AddClip = function () {
  return (
    <div className="add-clip">
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
      </div>
    </div>
  );
};

export default AddClip;
