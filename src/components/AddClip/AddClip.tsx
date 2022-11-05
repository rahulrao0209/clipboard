import { useContext, useRef } from 'react';
import ClipContext from '../../context/ClipContext';
import { BiSend, MdDelete, TfiClose } from '../../icons';
import type { AddClipProps } from '../../types';
import './AddClip.scss';

const AddClip = function ({
  showAddClipWindow,
  toggleAddClipWindow,
}: AddClipProps) {
  /* Create ref's for capturing user input data */
  const clipTitleRef = useRef();
  const clipContentRef = useRef();

  /* Get the required data and functions from ClipContext */
  const { addClip } = useContext(ClipContext);

  const handleAddClip = function () {
    const id = Date.now();
    const title = (clipTitleRef.current as HTMLInputElement).value;
    const content = (clipContentRef.current as HTMLInputElement).value;

    /* Clean up the inputs */
    (clipTitleRef.current as HTMLInputElement).value = '';
    (clipContentRef.current as HTMLInputElement).value = '';

    addClip({
      id,
      title,
      content,
    });
  };

  const handleDeleteClip = function (event: React.MouseEvent<HTMLElement>) {};

  return (
    <div className={`add-clip ${showAddClipWindow ? '' : 'hide'}`}>
      <div className="add-clip__data">
        <div className="add-clip__title">
          <label htmlFor="title">Clip Name</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            ref={clipTitleRef}
          />
        </div>
        <div className="add-clip__content">
          <label htmlFor="content">Clip Name</label>
          <textarea placeholder="Content" id="content" ref={clipContentRef} />
        </div>
      </div>

      <div className="add-clip__controls">
        <button className="add-clip__delete-btn" onClick={handleDeleteClip}>
          <MdDelete className="delete-icon" />
        </button>
        <button className="add-clip__send-btn" onClick={handleAddClip}>
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
