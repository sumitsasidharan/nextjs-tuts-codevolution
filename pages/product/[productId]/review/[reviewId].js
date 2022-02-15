import React from 'react'
import { useRouter } from 'next/router'

const Review = () => {
   const router = useRouter();
   console.log(router.query)
   const { reviewId} = router.query
  return (
    <div>Review</div>
  )
}

export default Review