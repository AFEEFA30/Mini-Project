
import React from 'react'
import'./CollectionDetails.css';


function CollectionDetails() {
  return(
    <div className='collection-container'>
      <div className='collection'>
        <h2>Womens</h2>
        <img src="https://th.bing.com/th/id/OIP.sviybmjtbUbEY9xu3h4QCQHaLH?w=179&h=268&c=7&r=0&o=5&pid=1.7 "></img>
        <h1>Churidar</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$1350</span>
          <span style={{color:'black'}}>$1250</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
        </div>

      <div className='collection'>
        <img src="https://th.bing.com/th/id/OIP.noq8euSFQk3Ou08pblNGLAHaN8?w=179&h=337&c=7&r=0&o=5&pid=1.7"></img>
        <h1>Pocket Abaya</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$1420</span>
          <span style={{color:'black'}}>$1320</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>


 <div className='collection'>
        <img src="https://th.bing.com/th/id/OIP.8JhmN5FlB__BiCWd2W-m9gHaJ2?w=179&h=239&c=7&r=0&o=5&pid=1.7"></img>
        <h1> Saree</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$3520</span>
          <span style={{color:'black'}}>$3420</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      

      <div className='collection'>
        <img src="https://www.bing.com/th?id=OPAC.3dmwNLAlOEKd%2fQ474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1 "></img>
        <h1>Long Gown</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$1300</span>
          <span style={{color:'black'}}>$1200</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <h2>Mens</h2>
        <img src=" https://th.bing.com/th/id/OIP.KEhLtgGMWIdlbVaW08_jOAHaNK?w=179&h=319&c=7&r=0&o=5&pid=1.7"></img>
        <h1>Monochrome style</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$1360</span>
          <span style={{color:'black'}}>$1260</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <img src="https://cdn.luxe.digital/media/sites/7/2019/01/11174427/casual-dress-code-men-style-summer-luxe-digital.jpg "></img>
        <h1>Casual Style </h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$1300</span>
          <span style={{color:'black'}}>$1200</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <img src="https://th.bing.com/th/id/OIP.In-P9MRuXvv5IHDMK4GhdgHaK1?w=179&h=262&c=7&r=0&o=5&pid=1.7"></img>
        <h1> Style in Winter</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$450</span>
          <span style={{color:'black'}}>$350</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <img src="https://th.bing.com/th/id/OIP.SFo6SieL22bbJzOSrY2_zQHaLH?w=200&h=300&c=7&r=0&o=5&pid=1.7"></img>
        <h1>Shirt</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$320</span>
          <span style={{color:'black'}}>$220</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div> 

      <div className='collection'>
        <h2>Kids</h2>
        <img src="data:image/jpeg;base64,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 "></img>
        <h1>Frock</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$2350</span>
          <span style={{color:'black'}}>$2250</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <img src="https://th.bing.com/th/id/OIP.rXUUG8QNor00i4NSoeNXVwHaHY?w=200&h=199&c=7&r=0&o=5&pid=1.7 "></img>
        <h1>Summer Dress</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$350</span>
          <span style={{color:'black'}}>$250</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <img src="https://th.bing.com/th/id/OIP.zrtV17DY4VTV2gGHhi_c0wAAAA?w=129&h=193&c=7&r=0&o=5&pid=1.7 "></img>
        <h1>Winter Outfit</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$620</span>
          <span style={{color:'black'}}>$520</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>

      <div className='collection'>
        <img src=" https://th.bing.com/th/id/OIP.RQ0gW_dM3xek4iKftfH4jwHaJQ?w=175&h=220&c=7&r=0&o=5&pid=1.7"></img>
     
        <h1>Cotton Tshirt</h1>
        <div>
          <span style={{textDecoration:'line-through',marginRight:'5px'}}>$350</span>
          <span style={{color:'black'}}>$250</span>
          <div className='collection-button'>Add to Cart</div>
        </div>
      </div>
   </div>

  )
}




 export default CollectionDetails;