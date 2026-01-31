interface ButtonPropType {
  children: React.ReactNode;
  styleClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "button";
}

const Button = ({ children, styleClass, onClick, type }: ButtonPropType) => {
  return (
    <button
      className={`${styleClass} px-5 py-2 border-2 border-sky-500 rounded-lg text-white transform transition duration-500 hover:scale-110`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
