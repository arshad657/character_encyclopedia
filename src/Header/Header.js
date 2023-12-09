import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header({currentURL}) {

  return (
    <header className="website-header">
      <div className="logo-container">
          <h4>Character Encyclopedia</h4>
      </div>
      <nav className="navigation">
        <ul>
            <li><Link to="/" style={{borderBottom: !currentURL.includes('favorites') ? '3px solid red' : '#fdf1e5', paddingBottom: 15, color: !currentURL.includes('favorites') ? 'red' : 'gray'}}>Characters</Link></li>
            <li><Link to="/favorites" style={{borderBottom: currentURL.includes('favorites') ? '3px solid red' : '#fdf1e5', paddingBottom: 15, color: currentURL.includes('favorites') ? 'red' : 'gray'}}>Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
