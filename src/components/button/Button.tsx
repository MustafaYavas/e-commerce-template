import React from 'react';

interface ButtonProps {
  isFill: boolean;
  className?: string;
  text: React.ReactElement;
  onClick?: () => void;
}

const Button = ({ isFill, className, text, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={`${
          isFill
            ? 'border border-zinc-950 bg-zinc-950 hover:bg-white ' +
              'text-white hover:text-black hover:border hover:border-zinc-950'
            : 'bg-white hover:bg-zinc-950 text-black hover:text-white'
        } ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
