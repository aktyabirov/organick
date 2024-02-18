import React, { useState, useEffect } from "react";
import HeroSection from "../../components/header/HeroSection";
import ProductList from "../../components/ProductList";
import { Button } from "../../components/buttons/Button";
import Data from "../../data/data";
import ArrowIcon from '../../assets/icon/Header/ArrowIcon';
import { useNavigate } from 'react-router-dom';
import Aboutus1 from "../../assets/icon/aboutus1";
import Aboutus2 from "../../assets/icon/Header/Aboutus2";

const HomePage = () => {
  const allProducts = Data.flatMap((category) => category.products);
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState(
    allProducts.slice(0, productsPerPage)
  );
  const vegetableProducts =
    Data.find((category) => category.category === "Vegetable")?.products || [];

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const nextProducts = allProducts.slice(0, currentPage * productsPerPage);
    setDisplayedProducts(nextProducts);
  }, [currentPage]); 

  const heroContent = {
    isHomePage: true,
    title: "Choose the best healthier way of life",
    subtitle: "100% Natural Food",
    buttonText: "Explore Now",
    backgroundImage:
      "https://github.com/aktyabirov/assets/blob/main/organic/Group%2018.png?raw=true",
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/shop'); 
  };


  return (
    <div>
      <HeroSection
        isHomePage={heroContent.isHomePage}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        buttonText={heroContent.buttonText}
        backgroundImage={heroContent.backgroundImage}
      />

      <div>
        <section>
          <div className="container flex justify-center gap-8 pt-20">
          <div className="h-[300px] w-[550px] rounded-3xl bg-cover" style={{ backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/card2.jpg?raw=true)' }}>
            <h2 className="text-white pt-[80px] pl-8 text-[25px] font-cursive">Natural!!</h2>
            <h1 className="text-white font-bold text-[36px] pl-8">Get Garden <br /> Fresh Fruits</h1>
          </div>
          <div className="h-[300px] w-[550px] rounded-3xl " style={{ backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/card1.jpg?raw=true)' }}>   <h2 className="text-mint-green pt-[80px] pl-8 text-[25px] font-cursive">Offer!!</h2>
            <h1 className="text-primary font-bold text-[36px] pl-8">Get 10% off <br /> Fresh on Vegetables</h1></div>
          </div>
        </section>
        <section>
          <div className=" flex bg-off-white mt-20" >
            <div className="h-[667px] w-[700px] bg-contain bg-no-repeat"style={{ backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/Photo_57.png?raw=true)'}}></div>
            <div className=" w-[700px]">
              <p className="text-mint-green font-cursive text-[25px] pt-20">About Us</p>
              <h2 className="text-primary font-bold text-[40px]">We Believe in Working <br />
                Accredited Farmers</h2>
                <p className="text-slate-gray">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="flex pt-8">
                    <Aboutus1/>
                  <div className="pl-4" >
                    <h2 className="text-primary font-bold text-[20px]"> Organic Foods Only</h2>
                    <p className="text-slate-gray"> Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  </div>
                </div>

                <div className="flex pt-8 pb-7">
                    <Aboutus2/>
                  <div className="pl-4">
                    <h2 className="text-primary font-bold text-[20px]"> Quality Standards</h2>
                    <p className="text-slate-gray"> Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  </div>
                </div>

                <Button onClick={handleNavigate}  className='text-primary' iconPosition='after' variant="primary" icon={ArrowIcon}>
              Shop now
            </Button>

            </div>
          </div>
        </section>
        <div>
        <div className='container pt-14'>
      <h2 className='text-center font-bold text-mint-green text-[30px] font-cursive'>Categories</h2>
      <h1 className=' text-center font-bold text-primary text-[50px] pb-10'>Our Products</h1>
      </div>
        <ProductList products={displayedProducts} />
        </div>

        {currentPage * productsPerPage < allProducts.length && (
          <div className=" flex justify-center text-center mt-4">
            <Button onClick={handleLoadMore} variant="primary">
              Load More
            </Button>
          </div>
        )}
      </div>
      <section className="my-8 bg-primary pb-40">
        <div className="container">
          <p className="text-mint-green pt-20"> Offer</p>
          <div className="flex justify-between pb-10">

        <h2 className="text-4xl font-bold mb-4 text-white">We Offer Organic For You</h2>
        <Button onClick={handleNavigate}  className='text-primary' iconPosition='after' variant="secondary" icon={ArrowIcon}>
              View all product
            </Button>
          </div>
        </div>
        <ProductList products={vegetableProducts} />
      </section>
    </div>
  );
};

export default HomePage;