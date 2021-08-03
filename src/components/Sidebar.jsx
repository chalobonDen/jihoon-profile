import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import pjh3 from '../image/pjh3.jpg';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';

const Sidebar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="xl:w-1/4">
      <section
        data-aos="slide-up"
        className="sidebar shadow-md text-center m-5 items-center rounded-md border-2 border-white border-opacity-0 bg-white bg-opacity-30"
      >
        <div className="block mb-30 mt-10 mb-10 text-gray-600 font-semibold">
          <img
            src={pjh3}
            alt="profile"
            className="block object-cover mx-auto w-60 h-60 rounded-full mb-10 mt-10 "
          />
          <span className="block m-2 text-2xl text-gray-900">Park Jihoon</span>

          <div className="text-gray-500">
            <a
              className="hover:text-gray-200"
              href="https://twitter.com/Park_Jihoon_twt"
            >
              <FaTwitter className="inline-block mr-2" />
              <span>Park_Jihoon_twt</span>
            </a>
          </div>

          <div className="text-gray-500">
            <a
              className="block hover:text-gray-200"
              href="https://www.instagram.com/0529.jihoon.ig/"
            >
              <FaInstagram className="inline-block mr-2" />
              <span>0529.jihoon.ig</span>
            </a>
          </div>

          <div className="text-gray-500">
            <a
              className="hover:text-gray-200"
              href="https://www.youtube.com/c/PARKJIHOONOfficial"
            >
              <FaYoutube className="inline-block mr-2" />
              <span>PARK JIHOON Official </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
