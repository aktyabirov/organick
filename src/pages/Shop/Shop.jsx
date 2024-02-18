import React from 'react';
import ProductList from '../../components/ProductList';
import Data from '../../data/data';
import HeroSection from '../../components/header/HeroSection';

const Shop = () => {
  const allProducts = Data.flatMap(category => category.products);

  const heroContentShop = {
    isHomePage: false,
    title: "Shop",
    backgroundImage:
      "https://github.com/aktyabirov/assets/blob/main/organic/shopBanner.png?raw=true",
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pb-20'>
       <HeroSection
        isHomePage={heroContentShop.isHomePage}
        title={heroContentShop.title}
        subtitle={heroContentShop.subtitle}
        backgroundImage={heroContentShop.backgroundImage}
      />
    <div className="container mx-auto mt-8">
    </div>
      <ProductList products={allProducts} />
    </div>
  );
};

export default Shop;
