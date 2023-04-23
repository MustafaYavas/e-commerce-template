import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import React from 'react';

const OthersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default OthersLayout;
