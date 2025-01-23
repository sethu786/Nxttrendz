import React from 'react'
import './index.css' // Import the CSS file for styling

const Header = () => (
  <header>
    {/* Top Bar */}
    <div className="top-bar">
      <span className="top-bar-item">Lorem ipsum dolor</span>
      <span className="top-bar-item">Lorem ipsum dolor</span>
      <span className="top-bar-item">Lorem ipsum dolor</span>
    </div>

    {/* Main Header */}
    <div className="main-header">
      {/* Logo Section */}
      <div className="header-top">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dgledopgq/image/upload/v1737636401/Logo_oezo3v.png"
            alt="Logo"
          />
        </div>

        {/* Icons */}
        <div className="icons">
          <span className="icon">🔍</span>
          <span className="icon">❤️</span>
          <span className="icon">👜</span>
          <span className="icon">👤</span>
          <div className="language">
            ENG <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </div>
  </header>
)

export default Header
