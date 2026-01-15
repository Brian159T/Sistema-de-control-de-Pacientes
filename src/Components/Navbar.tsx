import './Navbar.css';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

interface NavbarProps {
  show: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ show }) => {
  return (
    <div className={show ? 'sidebar active' : 'sidebar'}>
      <img src={logo} className="logo" alt="Logo" />

      <ul>
        <li>
          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/about">
            <FaInfoCircle />
            <span>About</span>
          </Link>
        </li>

        <li>
          <Link to="/contactanos">
            <FaEnvelope />
            <span>Contáctanos</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;