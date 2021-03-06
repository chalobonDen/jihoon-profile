import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [manuDropdown, setManuDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navToggler = () => {
    setManuDropdown(manuDropdown === false ? true : false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={
        navbar
          ? 'z-50 fixed inset-x-0 flex items-center justify-between flex-wrap p-5 mb-10 bg-white border-2'
          : 'z-50 fixed inset-x-0 flex items-center justify-between flex-wrap p-5 mb-10 '
      }
      style={
        manuDropdown === true
          ? { backgroundColor: 'rgba(255,255,255,0.65)' }
          : {}
      }
    >
      <div className="block lg:hidden">
        <button
          onClick={navToggler}
          className="flex items-center rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <Hamburger size={20} color="#817aa0" />
        </button>
      </div>

      <div
        className={
          manuDropdown === false
            ? 'hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto'
            : 'w-full block flex-grow lg:flex lg:items-center lg:w-auto'
        }
      >
        <div className="text-sm lg:flex-grow">
          <nav>
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: '#817aa0',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #817aa0',
                lineHeight: '20px',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white text-white mr-4 text-gray-600"
            >
              HOME
            </NavLink>

            <NavLink
              to="/profile"
              activeStyle={{
                color: '#817aa0',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #817aa0',
                lineHeight: '20px',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              PROFILE
            </NavLink>

            <NavLink
              to="/discography"
              activeStyle={{
                color: '#817aa0',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #817aa0',
                lineHeight: '20px',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              DISCOGRAPHY
            </NavLink>
            <NavLink
              to="/filmography"
              activeStyle={{
                color: '#817aa0',
                fontWeight: 700,
                paddingBottom: '3px',
                borderBottom: '3px solid #817aa0',
                lineHeight: '20px',
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-gray-600"
            >
              FILMOGRAPHY
            </NavLink>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
