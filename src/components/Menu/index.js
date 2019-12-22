import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  return (
    <div className="topRibbon">
      <div className="name">
        <strong>Avinash Singh</strong> - Full Stack Web Developer
      </div>
      <div className="linkContainer">

        <Link to='/about'>
          About
        </Link>

        <Link to='/articles'>
          Articles
        </Link>

        <Link to='/portfolio'>
          Portfolio
        </Link>

      </div>
    </div>
  )
}

export default Menu;