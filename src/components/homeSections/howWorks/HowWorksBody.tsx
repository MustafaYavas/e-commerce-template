import CargoCard from '@/components/card/cargo/CargoCard';

const HowWorksBody = () => {
  const itemInfos = [
    {
      title: 'Purchase Securely',
      step: 1,
    },
    {
      title: 'Ships from warehouse',
      step: 2,
    },
    {
      title: 'Style your room',
      step: 3,
    },
  ];

  return (
    <div className="grid-three">
      {itemInfos.map((item, i) => (
        <CargoCard
          key={item.step}
          title={item.title}
          left={i % 2 === 0 ? true : false}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          step={i}
        />
      ))}
    </div>
  );
};

export default HowWorksBody;
