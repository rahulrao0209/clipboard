import { useContext, useEffect, useState } from 'react';
import { ADDED_NEW_CLIP, DELETED_CLIP, UPDATED_CLIP } from '../../constants';
import {
  ClipContext,
  ClipWindowContext,
  ConfirmModalContext,
  SettingsContext,
  ToastContext,
} from '../../context';
import { BiSend, MdDelete, TfiClose } from '../../icons';
import type { ClipData } from '../../types';
import './AddClip.scss';

const AddClip = function () {
  /* Show the current clip's data if an existing clip is selected/opened by the user */
  const [clipTitle, setClipTitle] = useState('');
  const [clipContent, setClipContent] = useState('');

  /* Get the required data and functions from ClipContext and ClipWindowContext */
  const { clips, addClip, updateClip, deleteClip } = useContext(ClipContext);
  const { clipId, setClipId, showAddClipWindow, toggleAddClipWindow } =
    useContext(ClipWindowContext);
  const { handleToast } = useContext(ToastContext);
  const { confirmSwitchOn } = useContext(SettingsContext);
  const { proceedToDelete, setProceedToDelete, setShowConfirmModal } =
    useContext(ConfirmModalContext);

  const handleUpdateClip = function () {
    /* Update an existing clip */
    updateClip({
      id: clipId,
      title: clipTitle,
      content: clipContent,
    });

    /* Clean up the inputs */
    setClipTitle('');
    setClipContent('');

    /* Show toast notification */
    handleToast(true, UPDATED_CLIP);
  };

  const handleAddClip = function () {
    /* If content is empty, do not add or update the clip */
    if (!clipContent) return;

    /* Update an existing clip or add a new one */
    if (clipId) {
      handleUpdateClip();
      return;
    }

    /* Add new clip */
    addClip({
      id: Date.now(),
      title: clipTitle,
      content: clipContent,
    });

    /* Clean up the inputs */
    setClipTitle('');
    setClipContent('');

    /* Show toast notification */
    handleToast(true, ADDED_NEW_CLIP);
  };

  const handleDeleteClip = function () {
    /* Delete the clip */
    deleteClip(clipId);
    setClipId('');

    /* Clean up the inputs */
    setClipTitle('');
    setClipContent('');

    /* Show toast notification */
    handleToast(true, DELETED_CLIP);

    /* Reset proceed to delete value to false */
    setProceedToDelete(false);
  };

  /* If the confirm switch is on, show the delete confirmation modal before deleting */
  const handleDeleteConfirmation = function () {
    setShowConfirmModal(true);
  };

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

  /* 
   If the user proceed's to delete the clip, via the confirmation modal,
   only then delete.
  */
  useEffect(() => {
    if (proceedToDelete) {
      handleDeleteClip();
    }
  }, [proceedToDelete]);

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
            tabIndex={-1}
          />
        </div>
        <div className="add-clip__content">
          <label htmlFor="content">Clip Name</label>
          <textarea
            placeholder="Content"
            id="content"
            onChange={(event) => setClipContent(event.target.value)}
            value={clipContent}
            tabIndex={-1}
          />
        </div>
      </div>

      <div className="add-clip__controls">
        <button
          className={`add-clip__delete-btn ${!clipId && 'disable'}`}
          onClick={
            confirmSwitchOn ? handleDeleteConfirmation : handleDeleteClip
          }
          tabIndex={-1}
          disabled={!clipId}>
          <MdDelete className="delete-icon" />
        </button>
        <button
          className="add-clip__send-btn"
          onClick={handleAddClip}
          tabIndex={-1}>
          <BiSend className="send-icon" />
        </button>
        <button
          className="add-clip__close-btn"
          onClick={toggleAddClipWindow}
          tabIndex={-1}>
          <TfiClose className="close-icon" />
        </button>
      </div>
    </div>
  );
};

export default AddClip;
