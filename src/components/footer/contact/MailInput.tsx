'use client';
import { useState } from 'react';

import styles from '../Footer.module.scss';

const MailInput = () => {
  const [input, setInput] = useState('');
  const [emptyError, setEmptyError] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinMailList = () => {
    if (input) {
      setIsLoading(true);
      setTimeout(() => {
        setIsJoined(true);
        setIsLoading(false);
      }, 1000);
    } else {
      setEmptyError(true);
      return;
    }
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
            value={input}
            onChange={(e) => {
              setEmptyError(false);
              setInput(e.target.value);
            }}
          />
          <button
            className="w-full block text-center bg-zinc-900 hover:bg-zinc-800 text-white 
            rounded-sm py-1 md:py-2 text-sm md:text-lg"
            onClick={handleJoinMailList}
          >
            {isLoading ? 'PLEASE WAIT...' : 'SUBSCRIBE'}
          </button>
        </>
      ) : (
        <div className="bg-gray-300 font-light text-lg col-span-3 py-5 text-center text-black">
          Thank you! Your submission has been received!
        </div>
      )}

      {emptyError && (
        <p className="text-sm text-rose-600">Please enter a valid email</p>
      )}
    </div>
  );
};

export default MailInput;
