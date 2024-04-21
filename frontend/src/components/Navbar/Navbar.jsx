import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <Link to='/'>
            <img src={assets.logo1} alt="logo" className='logo' />
            </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <Link to='/'> </Link>  <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search-icon" className='navbar-search-icon' />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="basket-icon" /></Link>
                    <div className="dot"></div>
                </div>
                <button onClick={()=> setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
