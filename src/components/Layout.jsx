
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import CallNowButton from './CallNowButton';

const Layout = ({ children }) => {
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
