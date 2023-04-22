interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="mt-20 md:mt-10 mb-10 text-2xl md:text-4xl text-center md:text-start">
      {title}
    </h2>
  );
};

export default Title;
