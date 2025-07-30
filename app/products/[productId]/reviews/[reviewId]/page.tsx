import React from 'react'
import { notFound } from 'next/navigation'

const reviewId = ({params} : {params : { productId : string,reviewId : string}}) => {
  const {reviewId , productId} = params
  
  if(parseInt(reviewId) > 1000) notFound()

  return (
    <div>
        productId {params.productId} and reviewId {params.reviewId}
    </div>
  )
}

export default reviewId
