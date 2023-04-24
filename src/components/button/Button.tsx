import Link from 'next/link';

import styles from './Button.module.scss';

interface ButtonProps {
  isLink: boolean;
  href?: string;
  isFill: boolean;
  className?: string;
  text: React.ReactElement;
  onClick?: () => void;
}

const Button = ({
  isLink,
  href,
  isFill,
  className,
  text,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {isLink ? (
        <Link href={href!} className={styles.link}>
          {text}
        </Link>
      ) : (
        <button
          className={`${
            isFill ? styles['button-fill'] : styles.button
          } ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
