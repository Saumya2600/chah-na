import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/heart.png';
import '../styles/Navbar.css';

function Navbar() {
  const [showLoveMsg, setShowLoveMsg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHeartClick = () => {
    setShowLoveMsg(true);
  };

  const handleClose = () => {
    setShowLoveMsg(false);
  };

  const handleHamburger = () => {
    setMobileOpen((open) => !open);
  };

  const handleNavLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" style={{ cursor: 'pointer' }} onClick={handleHeartClick}>
            <img src={logo} alt="Love Logo" />
          </div>
          <div className="navbar-hamburger" onClick={handleHamburger}>
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
            <span style={{ opacity: mobileOpen ? 0 : 1 }}></span>
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }}></span>
          </div>
          <ul className={mobileOpen ? 'navbar-mobile-open' : ''}>
            <li>
              <Link to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/comparison" onClick={handleNavLinkClick}>Comparison Game</Link>
            </li>
            <li>
              <Link to="/promise" onClick={handleNavLinkClick}>My Promise</Link>
            </li>
          </ul>
        </div>
      </nav>
      {showLoveMsg && (
        <div className="love-heart-overlay">
          <div className="love-heart-shape">
            <button className="love-heart-close" onClick={handleClose}>&times;</button>
            <div className="love-heart-content">
              I love you so much <span style={{ color: '#ff69b4', fontWeight: 700 }}>Chahna</span>,<br />
              please forgive me
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;