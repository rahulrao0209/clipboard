import { createContext, useState } from 'react';

const ClipWindowContext = createContext(null);

export const ClipWindowContextProvider = function (props: any) {
  const [clipId, setClipId] = useState('');
  const [showAddClipWindow, setShowAddClipWindow] = useState(false);

  const toggleAddClipWindow = function (clipId: string = '') {
    setShowAddClipWindow(!showAddClipWindow);
  };

  return (
    <ClipWindowContext.Provider
      value={{
        clipId,
        showAddClipWindow,
        toggleAddClipWindow,
        setClipId,
      }}>
      {props.children}
    </ClipWindowContext.Provider>
  );
};

export default ClipWindowContext;
