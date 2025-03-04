import React from 'react'
import Card from '../../Components/Card/Card'
import './HomePage.css'

function HomePage({products, addToCard}){

  return(
    <div>
        <div className="products">
            {
                products.map((product) => {
                    return <Card 
                    key={product.id}
                     product={product}
                     addToCard={addToCard}
                     />
                })
            }
        </div>
    </div>
  )
}

export default HomePage
