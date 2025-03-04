import React, { useState } from 'react'
import './Item.css'

function Item({card, changePriceAndCount}){
  let [count, setCount] = useState(card.count)

  const minus = () => {
    if(count > 1){
      setCount(--count)
      changePriceAndCount(count, card.id)
    }
  }

  const plus = () => {
    setCount(++count)
    changePriceAndCount(count, card.id)
  }

  return (
    <div className='card-item'>
        <div className='card-item-1'>
            <h3>{card.title}</h3>
            <img src={card.image} width={100} />
         </div>
        <div className='card-item-2'>
            <button onClick={minus}>-</button>
            <h3>{count}</h3>
            <button onClick={plus}>+</button>
        </div>
        <div>
            <h3>{card.cardPrice}$</h3> 
            <button>delete</button>
        </div>
    </div>
  )
}

export default Item
