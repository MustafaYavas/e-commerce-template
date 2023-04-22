import Icon from '@/components/Icon/Icon';
import styles from '../Footer.module.scss';

const FooterSectionTwo = () => {
  return (
    <div className={styles['footer-two-container']}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-0">
        <div className="flex flex-col justify-center items-center">
          <Icon name="GiCargoShip" color="rgb(31 41 55)" size={52} />
          <h4 className="text-xl my-4 text-slate-600">Priority Shipping</h4>
          <p className="w-full md:w-3/4 text-start md:text-center text-slate-500 tracking-normal md:tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Icon name="FaShippingFast" color="rgb(31 41 55)" size={52} />
          <h4 className="text-xl my-4 text-slate-600">Fuss Free Returns</h4>
          <p className="w-full md:w-3/4 text-start md:text-center text-slate-500 tracking-normal md:tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Icon name="FaHome" color="rgb(31 41 55)" size={52} />
          <h4 className="text-xl my-4 text-slate-600">In-home Setup Service</h4>
          <p className="w-full md:w-3/4 text-start md:text-center text-slate-500 tracking-normal md:tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSectionTwo;
