import React from 'react'
import { useRouter } from 'next/router'

const Review = () => {
   const router = useRouter();
   const { reviewId, productId } = router.query

  return (
    <div>
       <h2>Review {reviewId} for product {productId} </h2>
    </div>
  )
}

export default Review