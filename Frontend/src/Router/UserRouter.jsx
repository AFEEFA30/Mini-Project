import React from 'react'
import {Route ,Routes } from 'react-router-dom'
// import Home from '../Pages/User/Home'
// import SignUP from '../Pages/User/SignUP'
// import Login from '../Pages/User/Login'
import Home from '../Pages/User/Home';
import Contact from '../Components/User/Contact/Contact';
import CollectionDetailsPage from '../Pages/User/CollectionDetailsPage';
import LoginSignup from '../Components/User/LoginSignup/LoginSignup';
import Cart from '../Components/User/Cart/Cart';



 function UserRouter() {
   return (   
      <div>
     <Routes>     
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/collections' element={<CollectionDetailsPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      {/* <Route path='/SignUP' element={<SignUP/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SingleProduct' element={<SingleProduct/>}/> */}
    </Routes>     
     </div> 
  )
}

export default UserRouter;