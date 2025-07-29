import React from 'react'

const reviewId = ({params} : {params : { productId : string,reviewId : string}}) => {
  return (
    <div>
        productId {params.productId} and reviewId {params.reviewId}
    </div>
  )
}

export default reviewId
