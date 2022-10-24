import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import './ClipList.scss';

type Clip = {
  title?: string;
  content: string;
};

const ClipList = function () {
  const [clips, setClips] = useState<Clip[]>([]);

  if (clips.length === 0) {
    return (
      <div className="no-clips">
        <div className="no-clips__icon">
          <FaPencilAlt className="pencil-icon" />
        </div>
        <div className="no-clips__text">
          <p>You don't have any clips.</p>
          <p>Add some!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cliplist">
      <ul></ul>
    </div>
  );
};

export default ClipList;
