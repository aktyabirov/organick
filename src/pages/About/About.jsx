import React from 'react'
import HeroSection from '../../components/header/HeroSection';
import Aboutus1 from "../../assets/icon/aboutus1";
import Aboutus2 from "../../assets/icon/Header/Aboutus2";
import { Button } from "../../components/buttons/Button";
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '../../assets/icon/Header/ArrowIcon';
import Circle from '../../assets/icon/circle';
import ReturnIcon from '../../assets/icon/return';

const About = () => {
  const heroContentAbout = {
    isHomePage: false,
    title: "About Us",
    backgroundImage:
      "https://github.com/aktyabirov/assets/blob/main/organic/BannerAbout.png?raw=true",
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/shop'); 
  };




  return (
    <div>
        <HeroSection
        isHomePage={heroContentAbout.isHomePage}
        title={heroContentAbout.title}
        subtitle={heroContentAbout.subtitle}
        backgroundImage={heroContentAbout.backgroundImage}
      />
      <section>
      <div className='container'>
          <div className=" flex mt-20" >
            <div className="h-[667px] w-[700px] bg-contain bg-no-repeat"style={{ backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/about1.png?raw=true)'}}></div>
            <div className=" w-[700px]">
              <p className="text-mint-green font-cursive text-[25px] pt-20">About Us</p>
              <h2 className="text-primary font-bold text-[40px]">We do Creative <br />
              Things for Success</h2>
                <p className="text-slate-gray">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <div className='flex gap-5 items-center pb-8'>
                <div className="flex  pt-8">
                    <Aboutus1/>
                  <div className="pl-4" >
                    <h2 className="text-primary font-bold text-[20px]"> Modern Agriculture <br />Equipment </h2>
                  </div>
                </div>

                <div className="flex pt-8">
                    <Aboutus2/>
                  <div className="pl-4">
                    <h2 className="text-primary font-bold text-[20px]"> No growth <br /> hormones are used</h2>
                  </div>
                </div>
              </div>
                <Button onClick={handleNavigate}  className='text-primary' iconPosition='after' variant="primary" icon={ArrowIcon}>
              Explore more
            </Button>

            </div>
          </div>
          </div>
        </section>
        <section className='bg-off-white'>
          <div className='container justify-center flex items-center gap-10 pt-20 pb-20'>
            <div className='content_block w-[500px]'>
                <p className='font-bold text-mint-green font-cursive text-[25px]'>Why Choose Us?</p>
                <h1 className='text-primary font-bold text-[40px]'>We do not buy from the <br /> open market & traders</h1>
                <p className='text-slate-gray pb-8 pt-8'> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                <div className='flex gap-4 bg-whitish-grey w-[300px] py-4 rounded-xl pl-3 items-center'>
                  <Circle/> 
                  <p className='block'>100% Natural Product</p>
                </div>
                <p className='text-slate-gray pl-10 pb-5 pt-2'> Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                <div className='flex gap-4 bg-whitish-grey w-[300px] py-4 rounded-xl pl-3 items-center'>
                  <Circle/> 
                  <p className='block'>Increase Resistance</p>
                </div>
                <p className='text-slate-gray pl-10 pt-2'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>

            </div>
            <div className='img_block'>
            <div className="h-[500px] w-[700px] bg-contain bg-no-repeat"style={{ backgroundImage: 'url(https://github.com/aktyabirov/assets/blob/main/organic/about2.jpg?raw=true)'}}>

            </div>

          </div>
          </div>
            <div>
              <ul className='flex justify-center gap-4 pb-20'>
                <li className='bg-white rounded-xl w-[250px] h-[335px] flex flex-col items-center pt-14'>
                  <ReturnIcon/>
                  <h2 className='text-primary font-bold text-[20px] pt-3'>Return Policy</h2>
                  <p className=' text-center text-slate-gray pt-3'>Simply dummy text of the printintypesetting industry.</p>
                </li>
                <li className='bg-white rounded-xl w-[250px] h-[335px] flex flex-col items-center pt-14'>
                  <ReturnIcon/>
                  <h2 className='text-primary font-bold text-[20px] pt-3'>Return Policy</h2>
                  <p className=' text-center text-slate-gray pt-3'>Simply dummy text of the printintypesetting industry.</p>
                </li>
                <li className='bg-white rounded-xl w-[250px] h-[335px] flex flex-col items-center pt-14'>
                  <ReturnIcon/>
                  <h2 className='text-primary font-bold text-[20px] pt-3'>Return Policy</h2>
                  <p className=' text-center text-slate-gray pt-3'>Simply dummy text of the printintypesetting industry.</p>
                </li>
                <li className='bg-white rounded-xl w-[250px] h-[335px] flex flex-col items-center pt-14'>
                  <ReturnIcon/>
                  <h2 className='text-primary font-bold text-[20px] pt-3'>Return Policy</h2>
                  <p className=' text-center text-slate-gray pt-3'>Simply dummy text of the printintypesetting industry.</p>
                </li>
              </ul>
            </div>
        </section>
      

    </div>
  )
}
export default About;