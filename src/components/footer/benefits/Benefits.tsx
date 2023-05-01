import styles from '../Footer.module.scss';
import BenefitsItem from './BenefitsItem';

const FooterSectionTwo = () => {
  const itemInfos = [
    {
      id: 1,
      icon: 'GiCargoShip',
      mainText: 'Priority Shipping',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      icon: 'FaShippingFast',
      mainText: 'Fuss Free Returns',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      icon: 'FaHome',
      mainText: 'In-home Setup Service',
      subText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
  ];

  return (
    <div className={styles['benefits-container']}>
      <div className="grid-three px-5 md:px-0">
        {itemInfos.map((item) => (
          <BenefitsItem
            key={item.id}
            iconName={item.icon}
            mainText={item.mainText}
            subText={item.subText}
            count={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterSectionTwo;
