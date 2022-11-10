import { useContext } from 'react';
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

  const copyToClipboard = function (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGElement>,
  ) {
    event.preventDefault();
    event.stopPropagation();

    /* Write/Copy the clip data to the system clipboard */
    navigator.clipboard
      .writeText(content)
      .then(() => {
        handleToast(true, 'Copied to clipboard!');
      })
      .catch((err: ErrorEvent) =>
        console.log('Something went wrong - ', err.message),
      );
  };

  return (
    <div className="clip" data-clipid={id} onClick={updateClipId}>
      <div className="clip__title">{title}</div>
      <div className="clip__content">
        <p>{content}</p>
        <button className="clip__copy" onClick={copyToClipboard}>
          <MdContentCopy
            className="clip__copy-icon"
            onClick={copyToClipboard}
          />
        </button>
      </div>
    </div>
  );
};

export default Clip;
