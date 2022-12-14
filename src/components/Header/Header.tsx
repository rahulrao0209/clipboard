import { MdContentCopy } from '../../icons';
import './Header.scss';

const Header = function () {
  return (
    <header>
      <span>
        <MdContentCopy className="copy-icon" />
      </span>
      <h2>Clipboard</h2>
    </header>
  );
};

export default Header;
