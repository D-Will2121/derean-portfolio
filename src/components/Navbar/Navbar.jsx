import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="container container_navbar">
        <div className="app__navbar-title">
          <h1 className="p__tech-mono_title">Portfolio</h1>
        </div>
        <ul className="app__navbar-links">
          <li className="p__tech-mono_title p__tech-mono_home"><a href="#home">Home</a></li>
          <li className="p__tech-mono_title"><a href="#about">About</a></li>
          <li className="p__tech-mono_title"><a href="#web-dev">Web Dev</a></li>
          <li className="p__tech-mono_title"><a href="#game-dev">Game Dev</a></li>
          <li className="p__tech-mono_title"><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar;