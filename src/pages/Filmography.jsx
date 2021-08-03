import React, { useEffect, useState } from 'react';
import '../css/styles.css';
import film from '../image/film.jpg';
import film1 from '../image/film/film1.jpg';
import film2 from '../image/film/film2.jpg';
import film3 from '../image/film/film3.jpg';
import Filmcard from '../components/Filmcard';

const filmData = [
  {
    id: 1,
    name: 'Flower Crew: Joseon Marriage Agency',
    nameAct: 'Go Youngsoo',
    image: film1,
    date: 'Sep 16, 2019',
    description:
      'A fashionable young man who is an asset to the Flower Crew as he can turn any client into a beauty. Although he sometimes can be childish, he is known to be a very nice person.',
  },
  {
    id: 2,
    name: 'Love Revolution',
    nameAct: 'Gong Juyoung',
    image: film2,
    date: 'Sep 1, 2020',
    description: `a student of Class 1-2 in Isam Information High School; Ja-rim's boyfriend. An outgoing and jolly boy, Joo-young falls in love deeply with Ja-rim at first sight.`,
  },
  {
    id: 3,
    name: 'At A Distance Spring Is Green',
    nameAct: 'Yeo Jun',
    image: film3,
    date: 'Jun 14, 2021',
    description:
      'The handsome second son of a wealthy family, he is a first-year business student. He is a person that appears to have everything beautiful in life. However, he has a painful scar behind his bright mask.',
  },
];

export default function Filmography() {
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
          src={film}
          alt="test"
          className="parallax"
          style={{
            filter: `blur(0px)`,
            transform: `translateY(${offset * 0.5}px)`,
          }}
        />
        <div className="text-wrapper">
          <h2 className="headline">FILMOGRAPHY</h2>
        </div>
      </section>
      <div className="container my-20 mx-auto">
        {filmData.map((item) => {
          return <Filmcard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
