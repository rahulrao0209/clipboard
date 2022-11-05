import { useContext } from 'react';
import ClipContext from '../../context/ClipContext';
import ClipWindowContext from '../../context/ClipWindowContext';
import { MdContentCopy } from '../../icons';
import type { ClipData } from '../../types';
import './Clip.scss';

const Clip = function ({ id, title, content }: ClipData) {
  const { toggleAddClipWindow, setClipId } = useContext(ClipWindowContext);

  const updateClipId = function () {
    setClipId(id);
    toggleAddClipWindow();
  };

  const copyToClipboard = function (
    event: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGElement>,
  ) {
    event.preventDefault();
    event.stopPropagation();
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
