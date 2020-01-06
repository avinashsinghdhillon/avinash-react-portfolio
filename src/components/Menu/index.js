import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <div className="menuContainer">
      <div className="topRibbon">
        <div className="name">
          <strong>Avinash Singh</strong>
          <span className="desc"> - Full Stack Web Developer</span>
        </div>

        <div className="linkContainer">

        <Link to='/Contact'>
            Contact
          </Link>

          <Link to='/articles'>
            Articles
          </Link>

          <Link to='/portfolio'>
            Portfolio
          </Link>

          <Link to='/about'>
            About
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Menu;