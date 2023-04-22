import Title from '@/components/title/Title';
import styles from '../Footer.module.scss';
import MailInput from './MailInput';

const FooterSectionOne = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 
      ${styles['footer-one-container']} px-5 md:px-0`}
    >
      {/* <h4 className="text-2xl md:text-5xl font-semibold mb-2">
        Join our mailing list
      </h4> */}
      <Title title="Join our mailing list" />
      <p className="text-lg md:text-xl text-center text-slate-600">
        Sign up to receive inspiration, product updates, and special offers from
        our team.
      </p>

      <MailInput />

      <span className="text-sm md:text-base text-center">
        <span className="text-slate-400">
          We’ll never share your details. View our
        </span>
        <span className="text-slate-500 cursor-pointer whitespace-nowrap">
          {' '}
          Privacy Policy
        </span>
      </span>
    </div>
  );
};

export default FooterSectionOne;
