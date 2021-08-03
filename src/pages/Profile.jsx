import React, { useEffect, useState } from 'react';
import '../css/styles.css';
import profile from '../image/profile.jpg';
import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Career from '../components/Career';
import Education from '../components/Education';

const Profile = () => {
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
    <div className="mb-16">
      <section className="main">
        <img
          src={profile}
          alt="test"
          className="parallax"
          style={{
            filter: `blur(0px)`,
            transform: `translateY(${offset * 0.5}px)`,
          }}
        />
        <div className="text-wrapper">
          <h2 className="headline">PROFILE</h2>
        </div>
      </section>

      <div className="main-and-sidebar-wrapper">
        <Sidebar />
        <div className="mt-5 mr-5">
          <About />
          <Education />
          <Career />
        </div>
      </div>
    </div>
  );
};

export default Profile;
