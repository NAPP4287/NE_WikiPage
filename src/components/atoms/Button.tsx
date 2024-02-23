import { IButtonProps } from "src/interface/interfaceProps";

const Button = (props: IButtonProps) => {
  const { disabled, title, action, className, size } = props;

  const sizeStyle = () => {
    return size === "sm" ? "p-[10px]" : "px-4 py-1";
  };

  return (
    <button
      disabled={disabled}
      className={`cursor mx-1 my-2 rounded font-bold duration-200 ${className} ${sizeStyle()}`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Button;
