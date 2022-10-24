import { BottomBar, ClipList, Header } from './components';
import './Popup.scss';

const Popup = function () {
  return (
    <div className="popup">
      <Header />
      <ClipList />
      <BottomBar />
    </div>
  );
};

export default Popup;
