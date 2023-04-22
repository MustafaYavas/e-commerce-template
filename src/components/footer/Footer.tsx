import React from 'react';
import FooterSectionOne from './footerSectionOne/FooterSectionOne';
import FooterSectionTwo from './footerSectionTwo/FooterSectionTwo';
import FooterSectionThree from './footerSectionThree/FooterSectionThree';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <FooterSectionOne />
      <FooterSectionTwo />
      <FooterSectionThree />
    </div>
  );
};

export default Footer;
