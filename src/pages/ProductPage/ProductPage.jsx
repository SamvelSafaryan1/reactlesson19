import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../App'
import './ProductPage.css'

function ProductPage(){
    let [product, setProduct] = useState({})
    let {id} = useParams()

    useEffect(() => {
        instance.get(`/products/${id}`)
            .then((res) => setProduct(res.data))
    }, [id])

    return(
        <div className='info-box'>
            <h1>{product.id}</h1>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}$</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={product.image} />
        </div>
    )
}

export default ProductPage
