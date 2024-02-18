import React from 'react';
import { Button } from '../../components/buttons/Button'; 
import ArrowIcon from '../../assets/icon/Header/ArrowIcon';

const HeroSection = ({ isHomePage, title, subtitle, buttonText, backgroundImage, onButtonClick }) => {
  const sectionClass = isHomePage ? 'h-[700px]' : 'h-[300px]';
  const titleClass = isHomePage ? 'text-4xl font-bold text-primary' : 'text-4xl text-center font-bold text-primary item-center';
  const layoutClass = isHomePage ? 'container mx-auto px-4 flex flex-col justify-center items-start h-full':'container mx-auto px-4 flex flex-col justify-center h-full';

  return (
    <div
      className={`relative ${sectionClass} bg-cover bg-center text-white`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute "></div> 
      <div className={`${layoutClass}`}>
        {isHomePage && <p className="text-xl text-mint-green mb-4 text-[35px] font-cursive">{subtitle}</p>}
        <h1 className={`${titleClass} pb-10`}>{title}</h1>
        
        {isHomePage && <Button onClick={onButtonClick}  iconPosition='after' variant="secondary" icon={ArrowIcon}>
        {buttonText}
        </Button>
        }
      </div>
    </div>
  );
};

export default HeroSection;
