import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-content'>
        {/* <p>Sara all rights reserved</p> */}
        <nav className='footer-navigation'>
            <ul>
                <li><a href="/">Shop</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Footer;