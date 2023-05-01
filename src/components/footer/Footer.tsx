import React from 'react';
import Contact from './contact/Contact';
import Benefits from './benefits/Benefits';
import FooterBottom from './footerBottom/FooterBottom';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Contact />
      <Benefits />
      <FooterBottom />
    </div>
  );
};

export default Footer;
