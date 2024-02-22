import React from 'react';
import './Header.css';

function Header() {
    return (
         <div className="header">
               <div className='logo'>
                 <img className='logo'
                  src="https://th.bing.com/th/id/OIP.V1iYJA24a_op-y7sSPdeXwHaHb?rs=1&pid=ImgDetMain"
                  alt="img"/>
                <div/>
                <nav className='navigation'>
                  <ul>
                        <li>Home<a></a></li>
                         <li><a></a>Products</li>
                         <li><a>About</a></li>
                         <li><a>Contact</a></li>
                 </ul>
                </nav>
                </div>
                </div> 
    )
}
export default Header;