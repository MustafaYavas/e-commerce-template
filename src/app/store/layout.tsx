import styles from './store.module.scss';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`grid-three container mx-auto px-5 md:px-10 pt-10 ${styles['store-container']}`}
    >
      {children}
    </div>
  );
};

export default StoreLayout;
