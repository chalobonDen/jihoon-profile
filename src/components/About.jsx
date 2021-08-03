import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="slide-up"
      className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30"
    >
      <div>
        <h1 className="text-gray-800 text-xl font-semibold">Personal Info</h1>
        <div>Name: Park Jihoon</div>
        <div>Hangul: 박지훈</div>
        <div>Born: May 29, 1999</div>
        <div>Birthplace: Masan, South Korea</div>
        <div>Height: 173cm</div>
        <div>Blood Type: AB</div>
      </div>
    </div>
  );
};

export default About;
