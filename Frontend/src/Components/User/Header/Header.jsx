import React , { useState } from 'react';
 import { Link } from 'react-router-dom';
import './Header.css';

  const Header = () => {  
    const [menu,setMenu] = useState("shop")

    return (      
           <div className="header">
               <div className='header-logo'>
                 <img className='logo'
                  src="https://ih1.redbubble.net/image.3967801547.1315/st,small,507x507-pad,600x600,f8f8f8.jpg"
                   alt="img"/>
                <p>Welcome to Sara!</p> 
               </div> 
                 <ul className='nav-menu'>
                  <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/shop'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}}to='/Contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("collections")}}><Link style={{textDecoration:'none'}}to='/collections'>Collections</Link>{menu==="collections"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("login")}}><Link style={{textDecoration:'none'}}to='/login'>Login</Link>{menu==="login"?<hr/>:<></>}</li> 
                 </ul>     
                 </div>              
    )

}
export default Header;