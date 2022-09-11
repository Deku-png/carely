import React from 'react'
import './Navbar.css'
import Logo from './logo.png'
function Navbar() {
    return (
        <div className='Navbar'>
            <img className='logo' src={Logo} alt="Logo" />
            <span className="nav-logo">Carely</span>
            <div className="nav-items">
                <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="/product"><i class="fa-brands fa-product-hunt"></i> Products</a>
                <a href="/features"><i class="fa fa-fw fa-info"></i> About Us</a>
                <a href="/about"><i class="fa fa-fw fa-envelope"></i> Contact Us</a>
            </div>
            <div className="button">
                <button className='btn'>Book Appointment</button>
            </div>
        </div>
    )
}

export default Navbar
