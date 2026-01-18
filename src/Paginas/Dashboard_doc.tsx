import './Dashboard_doc.css';
import Navbar from '../Components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

const Dashboard: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="Appd">
      <header className="header">
        <GiHamburgerMenu size={23}
          onClick={() => setShowNav(!showNav)}
          className="menu-icon"
        />
      </header>

      <Navbar show={showNav} />

      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
