import './Navbar.css';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";

import { FaBookMedical } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { PiToothDuotone } from "react-icons/pi";
interface NavbarProps {
  show: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ show }) => {
  return (
    <div className={show ? 'sidebar active' : 'sidebar'}>
        <div className='contenedor_logo'>
            <img src={logo} className="logo" alt="Logo" />

        </div>
      

      <ul>
        <li>
          <Link to="/">
            <IoPersonSharp />
            <span>Datos Personales</span>
          </Link>
        </li>

        <li>
          <Link to="/about">
            <PiToothDuotone size={22}/>
            <span>Examen Dentario</span>
          </Link>
        </li>

        <li>
          <Link to="/contactanos">
            <FaBookMedical />
            <span>Antecedentes Clinicos</span>
          </Link>
        </li>

        <li>
          <Link to="/contactanos">
            <FaClipboardList />
            <span>Interconsulta</span>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;