import {
  AddClip,
  BottomBar,
  ClipList,
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
} = providers;

const Popup = function () {
  return (
    <div className="popup">
      <ClipWindowContextProvider>
        <ClipContextProvider>
          <SettingsContextProvider>
            <ToastContextProvider>
              <Toast />
              <Header />
              <ClipList />
              <BottomBar />
              <AddClip />
              <Settings />
            </ToastContextProvider>
          </SettingsContextProvider>
        </ClipContextProvider>
      </ClipWindowContextProvider>
    </div>
  );
};

export default Popup;
