import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
   const router = useRouter();
   const { productId } = router.query;
   console.log(productId);

   return (
      <div>
         <h1>Product Detail {productId} </h1>
      </div>
   );
};

export default ProductDetail;
