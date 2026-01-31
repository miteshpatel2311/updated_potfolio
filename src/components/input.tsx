import { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: string;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  styles,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`${styles} w-full rounded-md bg-transparent dark:bg-[#f5f5f51c] p-2 text-sky-500 dark:text-white placeholder:dark:text-white placeholder:dark:opacity-50 focus:outline-none border-sky-500 border-2`}
      />
    </div>
  );
};

export default Input;
