import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/heart.png';
import '../styles/Navbar.css';

function Navbar() {
  const [showLoveMsg, setShowLoveMsg] = useState(false);

  const handleHeartClick = () => {
    setShowLoveMsg(true);
  };

  const handleClose = () => {
    setShowLoveMsg(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" style={{ cursor: 'pointer' }} onClick={handleHeartClick}>
            <img src={logo} alt="Love Logo" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/comparison">Comparison Game</Link>
            </li>
            <li>
              <Link to="/promise">My Promise</Link>
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