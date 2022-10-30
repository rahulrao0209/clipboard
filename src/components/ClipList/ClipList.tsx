import { useState } from 'react';
import { FaPencilAlt } from '../../icons';
import { Clip } from '../index';
import './ClipList.scss';

type ClipProps = {
  id: string | number;
  title?: string;
  content: string;
};

const ClipList = function () {
  const [clips, setClips] = useState<ClipProps[]>([
    {
      id: 1,
      title: 'Clipboard browser extension',
      content:
        'A tool that will let you paste small snippets that can be easily copied and pasted to the board. A tool that will be helpful for developers. ',
    },
    {
      id: 2,
      title: 'Aadhar number',
      content: '8892 ABCD 0007',
    },
    {
      id: 3,
      title: 'Phone number',
      content: '8369569432',
    },
    {
      id: 4,
      title: 'PAN Card',
      content: 'AVVXXXXXXX',
    },
    {
      id: 5,
      title: 'Driving License',
      content: '4 wheeler and 2 wheeler',
    },
    {
      id: 6,
      title: 'Location',
      content: 'Maharashtra. Mumbai',
    },
  ]);

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
        {clips.map((clip: ClipProps) => (
          <Clip title={clip.title} content={clip.content} id={clip.id} />
        ))}
      </ul>
    </div>
  );
};

export default ClipList;
