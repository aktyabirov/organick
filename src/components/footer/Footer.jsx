import React from 'react';
import Logo from '../../assets/icon/Header/Logo'
import InstIcon from '../../assets/icon/Footer/InstIcon';
import Facebook from '../../assets/icon/Footer/Facebook';
import Twitter from '../../assets/icon/Footer/Twitter';
import Pinterest from '../../assets/icon/Footer/Pinterest';
import Newsletter from '../Newsletter';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404'; 
  return (
    <footer>
       {!isNotFoundPage && <Newsletter />}
      <div className="container flex justify-center pt-20">
        <div className='footer_contact text-end pr-10'>
          <h2 className='text-primary font-bold text-[30px]'>Contact Us</h2>
          <ul className='text-slate-gray flex flex-col gap-5 pt-4 pb-10'>
            <li>
              <p className='font-bold'>Email</p>
              <p>needhelp@Organia.com</p>
            </li>
            <li>
              <p className='font-bold'>Phone</p>
              <p>666 888 888</p>
            </li>
            <li>
              <p className='font-bold'>Address</p>
              <p>88 road, borklyn street, USA</p>
            </li>
          </ul>
        </div>
        <div className='footer_logo w-[543px] border-s-2 border-e-2 pr-10 pl-10 flex flex-col items-center'>
          <div><Logo/></div>
          <div><p className='text-slate-gray pt-6 pb-6'>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </p></div>
          <div>
            <ul className='flex gap-3'>
            <li><InstIcon/></li>
            <li><Facebook/></li>
            <li><Twitter/></li>
            <li><Pinterest/></li>
            </ul>
          </div>
        </div>
        <div className='footer_utility pl-10'>
          <h2 className='text-primary font-bold text-[30px]'>Utility Pages</h2>
          <ul className='text-slate-gray flex flex-col gap-5 pt-4 pb-10'>
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licences</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
      <p className='border-t-2 text-slate-gray text-center mt-10 p-6'>Copyright © <span className='font-bold'>Organick</span> | Designed by <span className='font-bold'>VictorFlow</span>  Templates - Powered by <span className='font-bold'>Webflow</span> </p>
    </footer>
  );
}

export default Footer;
