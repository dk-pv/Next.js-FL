import React from 'react'

function product({params}:{params :{productId : string}} ) {
  return (
    <div>
      this is the product   {params.productId}
    </div>
  )
}

export default product
