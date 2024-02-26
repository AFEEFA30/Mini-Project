import React from 'react'
import {Route ,Routes } from 'react-router-dom'
// import Home from '../Pages/User/Home'
// import SignUP from '../Pages/User/SignUP'
// import Login from '../Pages/User/Login'
// import SingleProduct from '../Pages/User/SingleProduct'
import Home from '../Pages/User/Home';
import LoginSignup from '../Components/User/LoginSignup/LoginSignup';


 function UserRouter() {
   return (   
      <div>
     <Routes>     
      <Route path='/' element={<Home/>}/>
      <Route path='/loginsignup' element={<LoginSignup/>}/>
      {/* <Route path='/SignUP' element={<SignUP/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SingleProduct' element={<SingleProduct/>}/> */}
    </Routes>     
     </div> 
  )
}

export default UserRouter;