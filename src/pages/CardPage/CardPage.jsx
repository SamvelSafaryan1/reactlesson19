import React from 'react'
import Item from '../../Components/Item/Item'

function CardPage({cards, changePriceAndCount, del, clear}){
  return (
    <div>
      <div className='cards-item'>
      {
            cards.map((card) => {
                return <Item key={card.id} card={card} changePriceAndCount={changePriceAndCount} del={del} clear={clear}/>
            })  
        }
      </div>
    </div>
  )
}

export default CardPage
