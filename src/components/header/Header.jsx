import { Link } from 'react-router-dom'; 
import Logo from '../../assets/icon/Header/Logo';
import SearchIcon from '../../assets/icon/Header/SearchIcon';
import CartIcon from '../../assets/icon/Header/CartIcon';
import React, { useState, useEffect } from 'react';
import Data from '../../data/data';

const Header = () => {

  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleCartUpdate = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemCount = cart.reduce((total, item) => total + item.userQuantity, 0);
      setCartCount(itemCount);
    };

    handleCartUpdate();
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);
  
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredProducts = Data.flatMap(category => category.products)
      .filter(product => product.description.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5); 

    setSearchResults(filteredProducts);
  };

  

  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between items-center py-[30px] px-4">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
          <Link to="/pages" className="text-gray-700 hover:text-green-600">Pages</Link>
          <Link to="/shop" className="text-gray-700 hover:text-green-600">Shop</Link>
          <Link to="/projects" className="text-gray-700 hover:text-green-600">Projects</Link>
          <Link to="/news" className="text-gray-700 hover:text-green-600">News</Link>
        </nav>
        <div className="flex items-center space-x-4">
        <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInput}
          placeholder="Search..."
          className="border-2 border-gray-300 bg-white h-12 px-7 pr-20 rounded-[40px] text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-[-5px]">
          <SearchIcon />
        </button>
        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 z-10">
            {searchResults.map(product => (
              <Link to={`/product/${product.productId}`} key={product.productId} className="flex items-center p-2 hover:bg-gray-100" onClick={() => {
                setSearchTerm(''); 
                setSearchResults([]); 
                 }} >
                <img src={product.img} alt={product.description} className="w-10 h-10 object-cover mr-2" />
                <div>
                  <div>{product.description}</div>
                  <div className="text-gray-500">${product.discounted_price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

          <Link to="/cart" className="text-gray-700 hover:text-green-600">
          <div className="relative">
            <CartIcon />
            <span className="absolute left-16 top-3 rounded-full py-1 text-[20px] font-bold text-primary"><p>Cart({cartCount})</p></span>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
