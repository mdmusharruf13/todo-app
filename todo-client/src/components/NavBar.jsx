import React from 'react'
import './NavBar.css'

const image = require('../images/Logo.png');


function NavBar({ setLoggedIn }) {
  return (
    <>
      <ul className='nav-list'>
        <li><img src={image} alt="logo" className='logo' /></li>
        <li><button className='logout-button' onClick={() => setLoggedIn(0)}>logout</button></li>
      </ul>
    </>
  )
}

export default NavBar