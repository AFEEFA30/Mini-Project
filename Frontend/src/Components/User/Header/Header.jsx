import React , { useState } from 'react';
 import { Link } from 'react-router-dom';
 //import { FaShoppingCart } from "react-icons/fa";
import './Header.css';



  const Header = () => {  
    const [menu,setMenu] = useState("shop")

    return (
    //  <>
    //                <div className='free'></div>
    //           {/* <div className ='nav-cart-count'>0</div> */}
    //             <div className='icon'>
    //           {/* <FaShoppingCart />  */}
    //    </div>            
           <div className="header">
               <div className='header-logo'>
                 <img className='logo'
                  src="https://ih1.redbubble.net/image.3967801547.1315/st,small,507x507-pad,600x600,f8f8f8.jpg"
                   alt="img"/>

                <p>Welcome to Sara!</p> 
               </div> 
                 <ul className='nav-menu'>

                  <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none'}}to='/contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("collections")}}><Link style={{textDecoration:'none'}}to='/collections'>Collections</Link>{menu==="collections"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("Cart")}}><Link style={{textDecoration:'none'}}to='/cart'>Cart</Link>{menu==="cart"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("login")}}><Link style={{textDecoration:'none'}}to='/login'>Login</Link>{menu==="login"?<hr/>:<></>}</li> 
                 </ul> 
                      
                     
                 </div>  
                       
          //  </>
             
    )

}
export default Header;