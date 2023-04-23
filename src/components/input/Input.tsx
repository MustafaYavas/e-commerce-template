import styles from './Input.module.scss';

interface InputProps {
  labelText: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  labelText,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className={styles.container}>
      <label className="text-lg text-slate-500">
        {labelText.toUpperCase()}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
