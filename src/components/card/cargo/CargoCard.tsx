import Image from 'next/image';

import styles from './CargoCard.module.scss';
import CardTitle from '../CardTitle';
import CardText from '../CardText';

interface CargoCard {
  title: string;
  left?: boolean;
  text: string;
}

const CargoCard = ({ title, left, text }: CargoCard) => {
  return (
    <div
      className={`text-center grid-two-reverse ${
        left ? 'card-over-up' : 'card-over-down'
      }`}
    >
      <div className={`relative ${left ? 'order-2' : 'order-1'}`}>
        <Image
          src="https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cargo"
          height="0"
          width="0"
          sizes="100vw"
          className="card-img card-img-radius"
        />
        <div className={`${styles['cargo-badge']} bg-rose-600`}>1.</div>
      </div>

      <div
        className={`mt-0 md:mt-5 text-start md:text-center ${
          left ? 'order-1' : 'order-2'
        }`}
      >
        <CardTitle title={title} />
        <CardText text={text} large={false} />
      </div>
    </div>
  );
};

export default CargoCard;
