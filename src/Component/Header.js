import React, { useState, useEffect, useRef } from 'react';
import { LOG_URL } from '../Utils/Static';
const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (section) => {
    setDropdown(dropdown === section ? null : section);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="header">
      <div className="logo">
        <img src={LOG_URL} alt="Company Logo" />
      </div>
      <nav className="nav">
        <div className="nav-item" ref={dropdownRef}>
          <button onClick={() => toggleDropdown('features')}>Features</button>
          {dropdown === 'features' && (
            <div className="dropdown">
              <ul>
                <li>24/7 Support</li>
                <li>AI-Powered</li>
                <li>Seamless Integration</li>
              </ul>
            </div>
          )}
        </div>
        <div className="nav-item" ref={dropdownRef}>
          <button onClick={() => toggleDropdown('pricing')}>Pricing</button>
          {dropdown === 'pricing' && (
            <div className="dropdown">
              <ul>
                <li>Startups: $19/month</li>
                <li>SMBs: $49/month</li>
                <li>Enterprise: $99/month</li>
              </ul>
            </div>
          )}
        </div>
        <div className="nav-item" ref={dropdownRef}>
          <button onClick={() => toggleDropdown('about')}>About Us</button>
          {dropdown === 'about' && (
            <div className="dropdown">
              <p>We are a leading provider of AI-powered chatbot solutions, dedicated to enhancing customer engagement and support for businesses of all sizes.</p>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
