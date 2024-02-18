import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import ArrowIcon from '../assets/icon/Header/ArrowIcon';
import { Button } from './buttons/Button';

const NotFoundPage = () => {
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div 
      className="h-screen relative"
      style={{ 
        backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/Photo.png?raw=true)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height:'600px'
      }}
    >   
      <h1 className="text-[250px] font-bold text-not-found absolute top-[80px] right-[300px]">404</h1>
      <p className='text-[60px] font-bold text-primary absolute top-[360px] right-[340px]'>Page not found</p>
      <p className="text-md text-primary mb-4 absolute top-[450px] right-[320px]">The page you are looking for doesn't exist or has been moved</p>
        <div className="absolute top-[490px] right-[560px]">
      <Button onClick={handleGoHome}  iconPosition='after' variant="primary" icon={ArrowIcon}>
      Go to Homepage
      </Button>
        </div>
    </div>
  );
};

export default NotFoundPage;
