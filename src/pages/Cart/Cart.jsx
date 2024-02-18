import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter(item => item.productId !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  return (
<div className='container'>
  <h2 className='text-center text-primary font-bold text-[40px]'>My Cart</h2>
  {cartItems.length === 0 ? (
    <p className='text-center font-bold text-primary text-[30px] pt-20 pb-20'>Your cart is empty 🛒 😔</p>
  ) : (
    <div className="grid grid-cols-[100px_2fr_1fr_1fr_1fr_auto] gap-4 items-center pb-10">
      {cartItems.map(item => (
        <React.Fragment key={item.productId}>
          <img src={item.img} alt={item.description} className="w-full h-auto" />
          <h3 className="col-span-1">{item.description}</h3>
          <p className="col-span-1 text-primary font-bold">Quantity: {item.userQuantity}</p>
          <p className="col-span-1 text-primary font-bold">Price: ${item.discounted_price.toFixed(2)}</p>
          <p className="col-span-1 text-primary font-bold">Total: ${item.discounted_price*item.userQuantity}</p>
          <button className='bg-red-500 text-white px-7 py-2 rounded-lg col-span-1' onClick={() => handleRemove(item.productId)}>Remove</button>
        </React.Fragment>
      ))}
    </div>
  )}
</div>

  );
};

export default Cart;
