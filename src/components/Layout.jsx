import {useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import CallNowButton from './CallNowButton';

const Layout = ({ children }) => {

  const location = useLocation();

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SocialSidebar />
      <main className="flex-grow">
        {children}
      </main>
      <CallNowButton />
      <Footer />
    </div>
  );
};

export default Layout;
