import React from 'react';
import PropTypes from 'prop-types';

const Filmcard = ({ name, nameAct, image, description }) => {
  return (
    <div className="items">
      <div className="img-con">
        <img src={image} alt="" />
      </div>
      <div className="info-con">
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
