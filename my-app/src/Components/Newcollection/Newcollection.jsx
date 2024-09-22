import React from 'react'
import './Newcollection.css'
import Item from "../Item/Item"
import new_collection from "../Assets/new_collections"

function Newcollection() {
  return (
    <div className='new_collection'>
        <h1>NEW COLLECTIONS</h1>
    <hr/>
    <div className="collection">
        {new_collection.map((item)=>{
            return <Item key={item.i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>
    </div>
  )
}

export default Newcollection
