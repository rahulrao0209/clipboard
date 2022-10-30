import { MdContentCopy } from '../../icons';
import './Clip.scss';

type ClipProps = {
  id: string | number;
  title?: string;
  content: string;
};

const Clip = function ({ id, title, content }: ClipProps) {
  return (
    <div className="clip">
      <div className="clip__title">{title}</div>
      <div className="clip__content">
        <p>{content}</p>
        <button className="clip__copy">
          <MdContentCopy className="clip__copy-icon" />
        </button>
      </div>
    </div>
  );
};

export default Clip;
