import CargoCard from '@/components/card/cargo/CargoCard';

const HowWorksBody = () => {
  return (
    <div className="grid-three">
      <CargoCard
        title="Purchase Securely"
        left={true}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        step="1"
      />
      <CargoCard
        title="Ships from warehouse"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        step="2"
      />
      <CargoCard
        title="Style your room"
        left={true}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        step="3"
      />
    </div>
  );
};

export default HowWorksBody;
