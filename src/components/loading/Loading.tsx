import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles['overlay-content']}>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
