import React , { useState } from 'react';

import { Link } from 'react-router-dom';
//import { FaTruckMoving  } from "react-icons/fa";
import './Header.css';


  const Header = () => {  
    const [menu,setMenu] = useState("shop")

    return (
      <>
                  <div className='free'></div>
              {/* <div className ='nav-cart-count'>0</div> */}
                {/* <div className='icon'>//
        <FaTruckMoving/>
      </div>  */}
           <div className="header">
               <div className='header-logo'>
                 <img className='logo'
                  src="https://th.bing.com/th/id/OIP.V1iYJA24a_op-y7sSPdeXwHaHb?rs=1&pid=ImgDetMain"
                   alt="img"/>
           <p>Welcome to Sara Boutique!At Sara Boutique,we believe in celebrating individuality and empowering you to express your unique style through our curated collection of cloth.Explore our latest collections and stay ahead of fashion curve with our carefully selected pieces.</p> 
               </div> 
                 <ul className='nav-menu'>
                  <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                 </ul>
 
               {/* <div className='nav=login-cart'>
                  <Link to='/login'><button>Login</button></Link>
                  <Link to='/cart'><img src="  "/>
                  </Link>
                 </div> */} 
                 </div>
           </>
             
    )

}
export default Header;