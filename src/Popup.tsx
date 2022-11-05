import { AddClip, BottomBar, ClipList, Header } from './components';
import { ClipContextProvider } from './context/ClipContext';
import { ClipWindowContextProvider } from './context/ClipWindowContext';
import './Popup.scss';

const Popup = function () {
  return (
    <div className="popup">
      <ClipWindowContextProvider>
        <ClipContextProvider>
          <Header />
          <ClipList />
          <BottomBar />
          <AddClip />
        </ClipContextProvider>
      </ClipWindowContextProvider>
    </div>
  );
};

export default Popup;
