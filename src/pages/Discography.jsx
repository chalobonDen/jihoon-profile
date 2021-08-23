import React from 'react';
import { useEffect, useState } from 'react';
import '../css/styles.css';
import Albumcard from '../components/Albumcard';
import pjh1 from '../image/pjh1.jpeg';
import oclock from '../image/album/oclock.jpg';
import mini2 from '../image/album/mini2.jpg';
import thew from '../image/album/thew.jpg';
import message from '../image/album/message.png';
import mycollection from '../image/album/mycollection.jpg';
import midnight from '../image/album/midnight.jpeg';
import calluup from '../image/album/calluup.jpg';
import talktome from '../image/album/talktome.jpg';
const discographyData = [
  {
    id: 1,
    name: `O'Clock`,
    type: 'Mini Album 1',
    image: oclock,
  },
  {
    id: 2,
    name: `360`,
    type: 'Mini Album 2',
    image: mini2,
  },
  {
    id: 3,
    name: `The W`,
    type: 'Mini Album 3',
    image: thew,
  },
  {
    id: 4,
    name: `Midnight`,
    type: 'OST Love Revolution',
    image: midnight,
  },
  {
    id: 5,
    name: `MESSAGE`,
    type: 'Full Album 1',
    image: message,
  },
  {
    id: 6,
    name: `Call U Up`,
    type: 'Universe Application',
    image: calluup,
  },
  {
    id: 7,
    name: `Take To me`,
    type: 'OST At a distance, spring is green ',
    image: talktome,
  },
  {
    id: 8,
    name: `My Collection`,
    type: 'Mini Album 4',
    image: mycollection,
  },
];

const Discography = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div className="App">
      <section className="main">
        <img
          src={pjh1}
          alt="test"
          className="parallax"
          style={{
            filter: `blur(0px)`,
            transform: `translateY(${offset * 0.5}px)`,
          }}
        />
        <div className="text-wrapper">
          <h2 className="headline">DISCOGRAPHY</h2>
        </div>
      </section>
      <div className="container my-20 mx-auto">
        {discographyData.map((item) => {
          return <Albumcard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Discography;
