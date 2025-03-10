import React, { useContext } from 'react'
import Item from '../../Components/Item/Item'
import { Context } from '../../Context/Context'

function CardPage(){
  const {cards, changePriceAndCount, del, clear} = useContext(Context)
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
