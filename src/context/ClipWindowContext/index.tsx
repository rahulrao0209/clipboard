import { createContext, useState } from 'react';
import type { ClipWindowContextProps } from '../../types';

const ClipWindowContext = createContext<ClipWindowContextProps>(null);

export const ClipWindowContextProvider = function (props: any) {
  const [clipId, setClipId] = useState<string | number>();
  const [showAddClipWindow, setShowAddClipWindow] = useState(false);

  const toggleAddClipWindow = function () {
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
