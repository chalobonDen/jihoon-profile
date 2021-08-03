import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Filmcard = ({ name, nameAct, image, description }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="items" data-aos="slide-up">
      <div className="img-con">
        <img src={image} alt="" />
      </div>
      <div className="info-con" data-aos="fade-up">
        <h3>{name}</h3>
        <h1>{nameAct}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

Filmcard.propTypes = {
  name: PropTypes.string,
  nameAct: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Filmcard;
