import React from 'react'
import './homepage.css'
function HomePage() {
  return (
    <div className='home'>
        <div className='home-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on best sellers products</p>
            <button>check now</button>
        </div>
        <div className='home-left'>
        <img src=" https://th.bing.com/th/id/OIP.eZr60LHu5kvLcrOzXxRzRAHaGv?w=197&h=180&c=7&r=0&o=5&pid=1.7" height={300}width={350}>
        </img>
       
        </div>
    </div>
  )
}

export default HomePage;