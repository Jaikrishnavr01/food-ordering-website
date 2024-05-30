import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="logo"width={100} />
      <p className='logo-title'>Admin <span>page</span></p>
      <img className='profile'src={assets.profile_image}  alt="profile_image" />
    </div>
  )
}

export default Navbar
