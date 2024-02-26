import React , { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { FaShoppingCart } from "react-icons/fa";
import './Header.css';



  const Header = () => {  
     const [menu,setMenu] = useState("shop")

    return (
      <>
                  <div className='free'></div>
             <div className ='nav-cart-count'>0</div>
               <div className='icon'>
             <FaShoppingCart />
      </div>            
           <div className="header">
               <div className='header-logo'>
                 <img className='logo'
                  src="https://ih1.redbubble.net/image.3967801547.1315/st,small,507x507-pad,600x600,f8f8f8.jpg"
                   alt="img"/>
                <p>Welcome to Sara!</p> 
               </div> 
                 <ul className='nav-menu'>
                  <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li> 
                 </ul> 
                 
             <div className='nav-login-cart'>
                  {localStorage.getItem('auth-token')
                 ?(<button onClick={()=>{localStorage.reamoveItem('auth-token');window.location.replace('/');}}>Logout</button>)
                  :(<Link to='/login'><button>Login</button></Link>)} 
                 
                  <img src=" " alt="" />
                  </div>
                  {/* <Link to='/cart'><img src="  "/>
                  </Link> */}
                  
                 </div>  
                
           </>
             
    )

}
export default Header;