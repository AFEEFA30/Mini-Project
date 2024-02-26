import React from 'react'
import './Hii.css'
import { FaTruck } from "react-icons/fa";
function Hii() {
  return (
    <div className='hii'>
    <div className='hii-left'>
      <h1>NEW ARRIVALS ONLY</h1>
  
         <div className='hii-bag'>
       <p>Explore your </p>
       <p>style</p>

      
           </div> 

    <div className='hii-btn'>
        <div>SHOP NOW</div>
           <FaTruck/>
    </div>
   </div>
   <div className='hii-right-img'>
   <img src ="https://th.bing.com/th/id/OIP.4n1c9e2qjMrynEdlsSWuTQHaEo?w=219&h=180&c=7&r=0&o=5&pid=1.7"></img> 

    </div>
   </div>
   )
}

 export default Hii