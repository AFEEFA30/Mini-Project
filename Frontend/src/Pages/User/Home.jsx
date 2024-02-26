import React from 'react'
import Header from '../../Components/User/Header/Header';
//import Homepage from '../../Components/User/Homepage/Homepage'
 import Footer from '../../Components/User/Footer/Footer';
 import Hii from '../../Components/User/Hii/Hii';
import LoginSignup from '../../Components/User/LoginSignup/LoginSignup';
//import Loginpage from '../../Components/User/LoginPage/LoginPage';
//import SignupPage from '../../Components/User/SignUp/SignupPage';




function Home() {
  return (
    <div>
           <Header/>    
           <Hii/>
           <LoginSignup/>
       {/* <Homepage/> */}
          <Footer/>  
          {/* <Loginpage/>
          <SignupPage/> */}

     
       
    </div>
  )
}

export default Home;