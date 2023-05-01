'use client';
import { useEffect } from 'react';
import Aos from 'aos';

import Icon from '@/components/Icon/Icon';

interface BenefitsItem {
  iconName: string;
  mainText: string;
  subText: string;
  count: number;
}

const BenefitsItem = ({ iconName, mainText, subText, count }: BenefitsItem) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={`${300 * count}`}
    >
      <Icon name={iconName} color="rgb(31 41 55)" size={52} />
      <h4 className="text-xl my-4 text-slate-600">{mainText}</h4>
      <p className="w-full md:w-3/4 text-center text-slate-500 tracking-normal md:tracking-wide">
        {subText}
      </p>
    </div>
  );
};

export default BenefitsItem;
