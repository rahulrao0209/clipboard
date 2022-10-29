import { AddClip, BottomBar, ClipList, Header } from './components';
import './Popup.scss';

const Popup = function () {
  return (
    <div className="popup">
      <Header />
      <ClipList />
      <BottomBar />
      <AddClip />
    </div>
  );
};

export default Popup;
