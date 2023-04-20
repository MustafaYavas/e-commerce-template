import ProductCard from '../card/ProductCard';
import styles from './Section.module.scss';

const SectionOne = () => {
  return (
    <div className={`h-screen ${styles['section-one-container']}`}>
      <h2 className="my-10 text-4xl">Latest Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ProductCard productName="Tate Armchair" />
        <ProductCard productName="Tate Armchair" discount={true} />
        <ProductCard productName="Tate Armchair" />
      </div>
    </div>
  );
};

export default SectionOne;
