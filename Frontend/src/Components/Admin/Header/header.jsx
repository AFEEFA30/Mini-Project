import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// function header() {
  const Header = () => {
    const [menu,setMenu] = useState("shop")
    return (
     <div className='AdminHeader'>
      <div className='header-logo'>
                 <img className='logo'
                  src="https://ih1.redbubble.net/image.3967801547.1315/st,small,507x507-pad,600x600,f8f8f8.jpg"
                   alt="img"/>  
       <div className='nav-menu'>
      <h2>SARA ADMIN</h2>
      </div>          
      </div>
      <ul className='nav-bar'>
    
      <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to="/shop">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("userdata")}}><Link style={{textDecoration:'none'}}to="/userdata">UserData</Link>{menu==="userdata"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("collectionlist")}}><Link style={{textDecoration:'none'}}to="/collectionlist">CollectionList</Link>{menu==="collectionlist"?<hr/>:<></>}</li>
                  <li onClick={()=>{setMenu("orderlist")}}><Link style={{textDecoration:'none'}}to="/orderlist">OrderList</Link>{menu==="collectionlist"?<hr/>:<></>}</li>
                 </ul> 
                   
      <div className='logout-btn'>
      <button className='logout'>Logout</button>
   </div>
  </div>

  )
    
}
export default Header;