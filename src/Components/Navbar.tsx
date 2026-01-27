import './Navbar.css';
import logo from '../assets/logo.webp';
import { Link } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";

import { FaBookMedical } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { PiToothDuotone } from "react-icons/pi";
import { GiExitDoor } from "react-icons/gi";
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
          <Link to="/dashboard/datos">
            <IoPersonSharp />
            <span>Datos Personales</span>
          </Link>
        </li>

        <li>
          <Link to="/dashboard/examen">
            <PiToothDuotone size={22}/>
            <span>Examen Dentario</span>
          </Link>
        </li>

        <li>
          <Link to="/dashboard/antecedentes">
            <FaBookMedical />
            <span>Antecedentes Clinicos</span>
          </Link>
        </li>

        <li>
          <Link to="/dashboard/interconsulta">
            <FaClipboardList />
            <span>Interconsulta</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <GiExitDoor size={24}/>
            <span>Salir</span>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;