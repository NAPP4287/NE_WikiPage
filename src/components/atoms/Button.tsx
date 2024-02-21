import { IButtonProps } from "src/interface/interfaceProps";

const Button = (props: IButtonProps) => {
  const { disabled, title } = props;
  return (
    <button
      disabled={disabled}
      className={`mx-1 my-4 rounded px-4 py-1 font-bold text-white ${disabled ? "bg-slate-400" : "hover:bg-blue-dark bg-blue-main"}`}
    >
      {title}
    </button>
  );
};

export default Button;
