interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={`bg-zinc-950 hover:bg-zinc-800 text-white ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
