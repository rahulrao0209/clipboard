import { useContext } from 'react';
import ClipContext from '../../context/ClipContext';
import ClipWindowContext from '../../context/ClipWindowContext';
import { MdContentCopy } from '../../icons';
import type { ClipData } from '../../types';
import './Clip.scss';

const Clip = function ({ id, title, content }: ClipData) {
  const { updateClip } = useContext(ClipContext);
  const { toggleAddClipWindow, setClipId } = useContext(ClipWindowContext);

  const handleUpdateClip = function () {
    setClipId(id);
    toggleAddClipWindow();
    // updateClip(id);
  };

  const handleCopyClick = function (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGElement>,
  ) {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="clip" data-clipid={id} onClick={handleUpdateClip}>
      <div className="clip__title">{title}</div>
      <div className="clip__content">
        <p>{content}</p>
        <button className="clip__copy" onClick={handleCopyClick}>
          <MdContentCopy
            className="clip__copy-icon"
            onClick={handleCopyClick}
          />
        </button>
      </div>
    </div>
  );
};

export default Clip;
