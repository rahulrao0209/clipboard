import { useContext } from 'react';
import { COPIED_TO_CLIPBOARD } from '../../constants';
import { ClipWindowContext, ToastContext } from '../../context/';
import { MdContentCopy } from '../../icons';
import type { ClipData } from '../../types';
import './Clip.scss';

const Clip = function ({ id, title, content }: ClipData) {
  const { toggleAddClipWindow, setClipId } = useContext(ClipWindowContext);
  const { handleToast } = useContext(ToastContext);

  const updateClipId = function () {
    setClipId(id);
    toggleAddClipWindow();
  };

  /* 
    Clip the content to be displayed if the string length is greater than certain number of characters 
    and show three dots(...) indicating there is more content than is visible in the clip. 
  */
  const getDisplayContent = function (content: string) {
    return content.length > 135 ? content.slice(0, 130) + '...' : content;
  };

  const copyToClipboard = function (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGElement>,
  ) {
    event.preventDefault();
    event.stopPropagation();

    /* Write/Copy the clip data to the system clipboard */
    navigator.clipboard
      .writeText(content)
      .then(() => {
        handleToast(true, COPIED_TO_CLIPBOARD);
      })
      .catch((err: ErrorEvent) =>
        console.log('Something went wrong - ', err.message),
      );
  };

  return (
    <div className="clip" data-clipid={id} onClick={updateClipId}>
      <div className="clip__data">
        <div className="clip__title">{title}</div>
        <div className="clip__content">
          <p>{getDisplayContent(content)}</p>
        </div>
      </div>
      <button className="clip__copy" onClick={copyToClipboard}>
        <MdContentCopy className="clip__copy-icon" onClick={copyToClipboard} />
      </button>
    </div>
  );
};

export default Clip;
