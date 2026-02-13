import { Link } from 'react-router-dom';
import logo from '../assets/heart.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
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
  );
}

export default Navbar;