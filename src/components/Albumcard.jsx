import React from 'react';
import PropTypes from 'prop-types';

const Albumcard = ({ name, type, image }) => {
  return (
    <div className="album w-auto mx-auto">
      <div>
        <img className="h-80 rounded-2xl" src={image} alt="" />
      </div>
      <div className="flex h-20 justify-center items-center flex-col mb-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500">{type}</p>
      </div>
    </div>
  );
};

Albumcard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
};

export default Albumcard;
