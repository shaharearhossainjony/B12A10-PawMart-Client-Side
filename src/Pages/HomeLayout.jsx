import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
  );
};

export default HomeLayout;