import React from 'react'
import logo from '../../img/brand_logo.png'
import './HeaderBar.css'
const HeaderBar = () => {
  return (
    <div className="container-nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="button">
        <button>More</button>
      </div>
    </div>
  )
}
export default HeaderBar