import { useContext } from 'react';
import { ClipContext } from '../../context';
import { FaPencilAlt } from '../../icons';
import type { ClipData } from '../../types';
import { Clip } from '../index';
import './ClipList.scss';

const ClipList = function () {
  const { clips } = useContext(ClipContext);

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
      <ul className="cliplist__clips">
        {clips.map((clip: ClipData) => (
          <Clip title={clip.title} content={clip.content} id={clip.id} />
        ))}
      </ul>
    </div>
  );
};

export default ClipList;
