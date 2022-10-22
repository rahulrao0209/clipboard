import { BottomBar, Header } from './components';
import './Popup.scss';

const Popup = function () {
  return (
    <div className="popup">
      <Header />
      <BottomBar />
    </div>
  );
};

export default Popup;
