import Image from 'next/image';

import styles from './CargoCard.module.scss';

const CargoCard = () => {
  return (
    <div className="text-center grid grid-cols-2 md:grid-cols-1 gap-5">
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1592179900431-1e021ea53b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cargo"
          height="0"
          width="0"
          sizes="100vw"
          className={styles['card-img']}
        />
        <div className={`${styles['cargo-badge']} bg-rose-600`}>1.</div>
      </div>

      <div className="mt-0 md:mt-5 text-start md:text-center">
        <h5 className="text-lg md:text-2xl tracking-normal md:tracking-wide mb-2">
          Purchase Securely
        </h5>
        <p className="tracking-normal md:tracking-wide px-0 md:px-10 text-sm md:text-base text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default CargoCard;
