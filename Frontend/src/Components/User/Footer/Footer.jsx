import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
  
        <nav className='footer-navigation'>
            <ul>
                <li><a href="/">Shop</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/product">Product </a></li>
                <li><a href="/about">about</a></li>
            </ul>
        </nav>
    </div>
   
  )
}

export default Footer;