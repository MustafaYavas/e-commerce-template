import styles from './store.module.scss';

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={`${styles['store-container']}`}>{children}</div>;
};

export default StoreLayout;
