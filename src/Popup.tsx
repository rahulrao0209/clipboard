import {
  AddClip,
  BottomBar,
  ClipList,
  ConfirmModal,
  Header,
  Settings,
  Toast,
} from './components';
import { providers } from './context';
import './Popup.scss';

const {
  ClipContextProvider,
  ClipWindowContextProvider,
  ToastContextProvider,
  SettingsContextProvider,
  ConfirmModalContextProvider,
} = providers;

const Popup = function () {
  return (
    <div className="popup">
      <ClipWindowContextProvider>
        <ClipContextProvider>
          <SettingsContextProvider>
            <ToastContextProvider>
              <ConfirmModalContextProvider>
                <Toast />
                <Header />
                <ClipList />
                <BottomBar />
                <AddClip />
                <Settings />
                <ConfirmModal />
              </ConfirmModalContextProvider>
            </ToastContextProvider>
          </SettingsContextProvider>
        </ClipContextProvider>
      </ClipWindowContextProvider>
    </div>
  );
};

export default Popup;
