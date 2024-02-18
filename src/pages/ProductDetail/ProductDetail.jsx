import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../../data/data';
import ProductList from '../../components/ProductList';
import Stars from '../../assets/icon/Stars';
import { Button } from '../../components/buttons/Button';
import ArrowIcon from '../../assets/icon/Header/ArrowIcon';
import { toast } from 'react-toastify';
import HeroSection from '../../components/header/HeroSection';



function selectRandomProducts(allProducts, currentProductId, count) {
  const otherProducts = allProducts.filter(product => product.productId !== currentProductId);
  const shuffled = otherProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}



const ProductDetail = () => {
  const [cartCount, setCartCount] = useState(0);
  const [userQuantity, setQuantity] = useState(1); 
  const [relatedProducts, setRelatedProducts] = useState([]); 
  const { productId } = useParams();
  const allProducts = React.useMemo(() => Data.flatMap(category => category.products), []);
  const product = allProducts.find(product => product.productId === productId);

  const heroContentProduct = {
    isHomePage: false,
    title: "Shop Single",
    backgroundImage:
      "https://github.com/aktyabirov/assets/blob/main/organic/pomegranate.jpg?raw=true",
  };
  

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedRelatedProducts = selectRandomProducts(allProducts, productId, 4);
    setRelatedProducts(selectedRelatedProducts);
  }, [productId]); 
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity < product.quantity ? prevQuantity + 1 : prevQuantity;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };


  const handleAddToCart = () => {
    const handleCartUpdate = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemCount = cart.reduce((total, item) => total + item.userQuantity, 0);
      setCartCount(itemCount);
    };
    
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = existingCart.findIndex(item => item.productId === product.productId);
  
    if (existingItemIndex !== -1) {
      const existingItem = existingCart[existingItemIndex];
      existingItem.userQuantity += userQuantity; 
    } else {
      const cartItem = {
        ...product,
        userQuantity: userQuantity,
      };
      existingCart.push(cartItem);
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));
    handleCartUpdate();
    toast.success('Successfully added to cart!');
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };
  

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    
    <div >
      <HeroSection
        isHomePage={heroContentProduct.isHomePage}
        title={heroContentProduct.title}
        subtitle={heroContentProduct.subtitle}
        backgroundImage={heroContentProduct.backgroundImage}
      />
    <div className="  product-detail-container container flex pt-20">
      <div className=" bg-off-white relative product-image rounded-2xl mr-16">
        <img src={product.img} alt={product.description} />
        <p className='text-white bg-primary inline-block p-2 rounded-xl absolute top-10 left-10'> {product.category}</p>
      </div>
      <div className="product-info w-[500px]">
        <h1 className='text-primary font-bold text-[40px] pt-10 pb-4'>{product.description}</h1>
        <Stars />
        <div className='flex gap-4 pt-4'>
        <p className='line-through text-slate-gray'>${product.price}.00</p>
        <p className='text-primary font-bold'>${product.discounted_price}.00</p>
        </div>

        <p className='text-slate-gray pt-10 pb-10'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <div className='flex gap-4'>
        <div className="quantity-controls flex items-center gap-4">
          <p className='text-primary font-bold'>Quantity:</p>
          <div className='border px-8 py-3 rounded-lg'>
          <button className='text-primary font-bold text-[20px]' onClick={decrementQuantity}>-</button>
          <span className='pl-4 pr-4 font-bold text-primary'>{userQuantity}</span>
          <button className='text-primary font-bold text-[20px]' onClick={incrementQuantity}>+</button>
          </div>

        </div>
        <Button onClick={handleAddToCart} className='text-primary' iconPosition='after' variant="primary" icon={ArrowIcon}>
          Add to Cart
        </Button>
        </div>
      </div>
      </div>
      <div className='container flex flex-col items-center'>
      <div className='flex justify-center pt-20'>
        <div className='flex gap-4'>
        <Button  variant="primary">
          Product Description
        </Button>
        <Button variant="fourth">
          Additional Info
        </Button>
        </div>
      </div>
        <p className='text-slate-gray w-[700px] text-center pt-10 pb-20'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
      </div>
      <div className="related-products-section pb-20">

        <h2 className='text-center text-primary font-bold text-[40px] pb-10'>Related Products</h2>
        <ProductList products={relatedProducts} />
      </div>


    </div>
  );
};

export default ProductDetail;
