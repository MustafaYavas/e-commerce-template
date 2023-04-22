import CargoCard from '@/components/card/cargo/CargoCard';

const SectionFourBody = () => {
  return (
    <div className="grid-three">
      <CargoCard
        title="Purchase Securely"
        left={true}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CargoCard
        title="Ships from warehouse"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CargoCard
        title="Style your room"
        left={true}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
};

export default SectionFourBody;
