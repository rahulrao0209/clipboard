import { useContext, useEffect, useRef, useState } from 'react';
import type { ClipData } from '~types';
import ClipContext from '../../context/ClipContext';
import ClipWindowContext from '../../context/ClipWindowContext';
import { BiSend, MdDelete, TfiClose } from '../../icons';
import './AddClip.scss';

const AddClip = function () {
  /* Show the current clip's data if an existing clip is selected/opened by the user */
  const [clipTitle, setClipTitle] = useState('');
  const [clipContent, setClipContent] = useState('');

  /* Get the required data and functions from ClipContext and ClipWindowContext */
  const { clips, addClip } = useContext(ClipContext);
  const { clipId, showAddClipWindow, toggleAddClipWindow } =
    useContext(ClipWindowContext);

  const handleAddClip = function () {
    const id = Date.now();
    const title = clipTitle;
    const content = clipContent;

    /* Clean up the inputs */
    setClipTitle('');
    setClipContent('');

    /* If content is empty, do not add the clip */
    if (!content) return;

    addClip({
      id,
      title,
      content,
    });
  };

  const handleDeleteClip = function (event: React.MouseEvent<HTMLElement>) {};

  useEffect(() => {
    /* Show the current clip's values in the window if an existing clip is selected */
    const getCurrentClipValues = function () {
      /* If a current clip is not available, reset the title and content to empty to 
         get rid of any earlier values based on previous clip id's 
      */
      if (!clipId) {
        setClipTitle('');
        setClipContent('');
        return;
      }

      const currentClip = clips.find((clip: ClipData) => clip.id === clipId);

      setClipTitle(currentClip.title);
      setClipContent(currentClip.content);
    };

    getCurrentClipValues();
  }, [clipId]);

  return (
    <div className={`add-clip ${showAddClipWindow ? '' : 'hide'}`}>
      <div className="add-clip__data">
        <div className="add-clip__title">
          <label htmlFor="title">Clip Name</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            onChange={(event) => setClipTitle(event.target.value)}
            value={clipTitle}
          />
        </div>
        <div className="add-clip__content">
          <label htmlFor="content">Clip Name</label>
          <textarea
            placeholder="Content"
            id="content"
            onChange={(event) => setClipContent(event.target.value)}
            value={clipContent}
          />
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
