import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../assets/icon/Stars'

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.productId}`} className="border p-4 rounded-[40px]  block no-underline text-black bg-off-white w-[335px] h-[443px]">
        <div className='relative'>
      <img src={product.img} alt={product.description} className="mx-auto object-contain w-[335px] h-[324px] mt-4 transition-transform duration-300 transform hover:scale-110"  />
      <p className='text-white bg-primary inline-block p-2 rounded-xl absolute top-0 left-0'> {product.category}</p>
        
      <h3 className="text-lg text-primary font-bold">{product.description}</h3>
      <div className='flex justify-between border-t-2'>
        <div className='flex items-center'>
        <p className="text-gray-500 line-through mr-2 ">${product.price.toFixed(2)}</p>
        <p className="text-lg text-primary  font-bold">${product.discounted_price.toFixed(2)}</p>
        </div>
        <Stars/>
      </div>


        </div>
    </Link>
  );
};

export default Product;
