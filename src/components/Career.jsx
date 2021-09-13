import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Career = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="slide-up"
      className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30"
    >
      <div>
        <h1 className="text-gray-800 text-xl font-semibold">Career</h1>
        <div>Occupation: Singer, dancer, rapper, actor</div>
        <div>Group debut: August 7, 2017 (Wanna One)</div>
        <div>Solo debut: March 26, 2019</div>
        <div>Years active: 2006–present</div>
        <div>Agency: Maroo Entertainment</div>
      </div>
    </div>
  );
};

export default Career;
