import CargoCard from '@/components/card/cargo/CargoCard';

const SectionFourBody = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <CargoCard />
      <CargoCard />
      <CargoCard />
    </div>
  );
};

export default SectionFourBody;
