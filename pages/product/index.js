import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProductList = ({ productId = 100 }) => {
   const router = useRouter();

   console.log(router);
   return (
      <div>
         <Link href="/">
            <a>Back to Home</a>
         </Link>



         <h2>
            <Link href="/product/1">
               <a>Product 1</a>
            </Link>
         </h2>
         <h2>
            <Link href="/product/2">
               <a>Product 2</a>
            </Link>
         </h2>
         <h2>
            <Link href="/product/3" replace>
               <a>Product 3</a>
            </Link>
         </h2>

         <h2>
            <Link href={`/product/${productId}`}>
               <a>Product {productId}</a>
            </Link>
         </h2>
      </div>
   );
};

export default ProductList;
