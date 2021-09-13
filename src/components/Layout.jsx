import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {/* <Header /> */}
      <div
      //   className="content pt-28"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
