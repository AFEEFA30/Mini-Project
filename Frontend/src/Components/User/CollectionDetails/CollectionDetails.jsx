
import React from 'react'
import'./CollectionDetails.css';
import collection from '../../../collections.json'

function CollectionDetails({addToCart}) {
  return (
    <div className="collection-list">
        {collection.map((collection)=>(
            <div key={collection.id}className='collection'>
                <img src={collection.image}alt={collection.name}className='collection-image'/>
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>
                <p>Price:${collection.price}</p>
                <button onClick={() => addToCart(collection)}>addToCart</button> 
                </div>
        )
        )}
    </div>
  )
}

export default CollectionDetails;