import { AddClip, BottomBar, ClipList, Header, Toast } from './components';
import { providers } from './context';
import './Popup.scss';

const { ClipContextProvider, ClipWindowContextProvider, ToastContextProvider } =
  providers;

const Popup = function () {
  return (
    <div className="popup">
      <ClipWindowContextProvider>
        <ClipContextProvider>
          <ToastContextProvider>
            <Toast />
            <Header />
            <ClipList />
            <BottomBar />
            <AddClip />
          </ToastContextProvider>
        </ClipContextProvider>
      </ClipWindowContextProvider>
    </div>
  );
};

export default Popup;
