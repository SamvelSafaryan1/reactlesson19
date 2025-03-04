import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import Btn from '../Btn/Btn'

function Card({product, addToCard}){
  
  const handleToCard = (product) => {
    addToCard(product)
  }

  return(
    <div className="box">
    <div className='product'>
      <NavLink to={`/${product.id}`}>
      <h2>{product.title}</h2>
      <img src={product.image}/>
      </NavLink>
      <p>{product.price}$</p>
      <Btn handleToCard={handleToCard} product={product}/>
    </div>
    </div>
  )
}

export default Card
