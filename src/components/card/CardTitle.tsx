interface CardTitleProps {
  title: string;
  className?: string;
}

const CardTitle = ({ title, className }: CardTitleProps) => {
  return (
    <h5
      className={
        className
          ? className
          : 'text-lg md:text-2xl tracking-normal md:tracking-wide mb-0 md:mb-2'
      }
    >
      {title}
    </h5>
  );
};

export default CardTitle;
