'use client';
import { useState } from 'react';

import styles from '../Footer.module.scss';
import Button from '@/components/button/Button';

const MailInput = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinMailList = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsJoined(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className={`${styles['mail-input']} grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1`}
    >
      {!isJoined ? (
        <>
          <input
            type="email"
            placeholder="Email Adress"
            className="col-span-1 md:col-span-2"
          />
          <Button
            isLink={false}
            isFill={true}
            text={<span>{isLoading ? 'PLEASE WAIT...' : 'SUBSCRIBE'}</span>}
            onClick={handleJoinMailList}
          />
        </>
      ) : (
        <div className="bg-gray-300 font-light text-lg col-span-3 py-5 text-center text-black">
          Thank you! Your submission has been received!
        </div>
      )}
    </div>
  );
};

export default MailInput;
