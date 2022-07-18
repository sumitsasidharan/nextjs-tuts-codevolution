import { useRouter } from 'next/router'
import React from 'react'

const PageNotFound = () => {

   const router = useRouter();

   
  return (
    <div>
       <h1>404 Page with custom styling</h1>
       <h2 style={{ cursor: 'pointer'}} onClick={() => router.back()}>Click here to go back</h2>
    </div>
  )
}

export default PageNotFound