import { useState } from 'react';
import { AddClip, BottomBar, ClipList, Header } from './components';
import './Popup.scss';

const Popup = function () {
  const [showAddClipWindow, setShowAddClipWindow] = useState(false);

  const toggleAddClipWindow = function () {
    setShowAddClipWindow(!showAddClipWindow);
  };

  return (
    <div className="popup">
      <Header />
      <ClipList />
      <BottomBar toggleAddClipWindow={toggleAddClipWindow} />
      <AddClip
        toggleAddClipWindow={toggleAddClipWindow}
        showAddClipWindow={showAddClipWindow}
      />
    </div>
  );
};

export default Popup;
