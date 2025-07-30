import { products } from '@/utils/constant'
import React from 'react'

function product({params}:{params :{productId : string}} ) {
  const id:number = parseInt(params.productId)
    let product = products[id]
  return (
    
    <div>
      <h1>product : {product.name}</h1>
      <h1>price : {product.price}</h1>
    </div>
  )
}

export default product
