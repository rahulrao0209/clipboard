import { useState } from 'react';
import { AddClip, BottomBar, ClipList, Header } from './components';
import { ClipContextProvider } from './context/ClipContext';
import './Popup.scss';

const Popup = function () {
  const [showAddClipWindow, setShowAddClipWindow] = useState(false);

  const toggleAddClipWindow = function () {
    setShowAddClipWindow(!showAddClipWindow);
  };

  return (
    <div className="popup">
      <ClipContextProvider>
        <Header />
        <ClipList />
        <BottomBar toggleAddClipWindow={toggleAddClipWindow} />
        <AddClip
          toggleAddClipWindow={toggleAddClipWindow}
          showAddClipWindow={showAddClipWindow}
        />
      </ClipContextProvider>
    </div>
  );
};

export default Popup;
