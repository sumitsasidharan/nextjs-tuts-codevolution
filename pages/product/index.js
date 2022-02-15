import { useRouter } from 'next/router';
import React from 'react'

const ProductList = () => {
   const router = useRouter();
   
   console.log(router);
  return (
    <div>
       <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
       </ul>
    </div>
  )
}

export default ProductList