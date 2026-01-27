import './Dashboard_doc.css';
import Navbar from '../Components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="Appd">
      <div className="headerb">
        <GiHamburgerMenu
          size={23}
          onClick={() => setShowNav(prev => !prev)}
          className="menu-icon"
        />
      </div>

      <main className="main">
        <Outlet />
      </main>

      {/* NAVBAR */}
      <Navbar show={showNav} />

      {/* OVERLAY */}
      {showNav && (
        <div
          className="overlay"
          onClick={() => setShowNav(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;