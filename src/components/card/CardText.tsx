interface CardTextProps {
  text: string;
  large: boolean;
}

const CardText = ({ text, large }: CardTextProps) => {
  return (
    <p
      className={`tracking-normal md:tracking-wide text-sm md:${
        large ? 'text-xl' : 'text-base'
      } text-slate-600`}
    >
      {text}
    </p>
  );
};

export default CardText;
