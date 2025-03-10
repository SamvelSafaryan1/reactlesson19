import React from 'react'
import Card from '../../Components/Card/Card'
import './HomePage.css'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

function HomePage(){
  const {products, addToCard} = useContext(Context)
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
