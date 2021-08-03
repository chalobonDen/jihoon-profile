import React from 'react';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import '../App.css';
const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 bg-gray-300 bg-opacity-40 text-white text-center w-full">
      <div className="h-14 flex lg:justify-end justify-center items-center text-gray-500 lg:mr-20">
        <a href="https://twitter.com/Park_Jihoon_twt">
          <FaTwitter className="mr-5 hover:text-white" />
        </a>
        <a href="https://www.instagram.com/0529.jihoon.ig/">
          <FaInstagram className="mr-5 hover:text-white" />
        </a>
        <a href="https://www.youtube.com/c/PARKJIHOONOfficial">
          <FaYoutube className="mr-5 hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
