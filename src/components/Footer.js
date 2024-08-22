import React from 'react';

//import images
import Logo from '../assets/img/logo.svg';
import VisaImg from '../assets/img/visa.png';
import MastercardImg from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';

//import icons
import{
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'react-icons/io';


const Footer = () => {
  return (
  <footer className='lg:pt-24 pt-0' data-aos='fade-up' data-aos-offset='400'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-12 lg:flex-row'>
        {/*logo */}
        <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href='#'role="button" tabindex="0">
            <img src={Logo} alt='' />
          </a>
        </div>

        {/*link group */}
        <div className='flex flex-1 flex-col gap-16 lg:flex-row'>

          {/*link group */}
          <div className='text-center w-full lg:text-left'>
            <div className='text-xl font-medium mb-6'>Quick Links</div>
            <ul className='space-y-4 text-gray'>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Home</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Products</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">About</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Features</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Contact</a></li>
            </ul>
          </div>

          {/*link group*/}
          <div className='text-center w-full lg:text-left'>
            <div className='text-xl font-medium mb-6'>Resources Links</div>
            <ul className='space-y-4 text-gray'>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Download Whitepapper</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Smart Token</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Blockchain Explore</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Crypto API</a></li>
              <li>{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a className='hover:text-blue transition' href='#'role="button" tabindex="0">Interest</a></li>
            </ul>
          </div>

          
        </div>
        {/*payment */}
        <div className='flex flex-col flex-1'>
          <div className='lg:ml-[80px]'>
            <h3 className='h3 font-medium text-center mb-10 lg:text-left'>We accept following payment systems</h3>
            <div className='flex justify-center items-center gap-6'>
              <img src={VisaImg} alt='' />
              <img src={MastercardImg} alt='' />
              <img src={BitcoinImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*copy & social */}
    <div className='py-12'>
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/*copy text*/}
        <div>&copy; 2024 CRAPPO. All rights reserved.</div>
      {/*social icons */}
      <div className='flex text-2xl gap-x-8'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a className='hover:text-blue transition' href='#'role="button" tabindex="0"> <IoLogoYoutube /> </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a className='hover:text-blue transition' href='#'role="button" tabindex="0"> <IoLogoInstagram /> </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a className='hover:text-blue transition' href='#'role="button" tabindex="0"> <IoLogoTwitter /> </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a className='hover:text-blue transition' href='#'role="button" tabindex="0"> <IoLogoLinkedin /> </a>
      </div>
    </div>
    </div>
  </footer>
  );
};

export default Footer;
