import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="slide-up"
      className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30"
    >
      <div>
        <h1 className="text-gray-800 text-xl font-semibold">Education</h1>
        <p>
          He majored in Broadcasting Arts Department at School of Performing
          Arts Seoul and graduated in February 2018. He attended Chung-Ang
          University, majored in Performing Arts and Media.
        </p>
      </div>
    </div>
  );
};

export default Education;
