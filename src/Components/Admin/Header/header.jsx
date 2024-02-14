
import React from 'react'
import './header.css'

function header() {
  return (
    <div className='Header'>
      <div className='headerbrand'>
        <h1 >MEADOW</h1>

        <img className='pic'
        src="https://images.app.goo.gl/tD5sFguLaMSZKyLq9"
        alt="img" />
      </div>
      <div className='headerlinks'>
        <ul><li><a>Men</a></li>
        <li><a>Women</a></li>
        <li><a>Kids</a></li>
        <li>Support</li>
      </ul>
      </div>
      <div className='headerbuttons'>
        <button className='favourite'>Fav</button>
      </div>
      </div>
    )

  }
export default header;