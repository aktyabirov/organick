import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className='container'>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Product key={product.productId} product={product} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
