export type ButtonColor = "primary" | "secondary" | "info";

type ButtonProps = {
  outline?: boolean;
  color?: "primary" | "secondary" | "info";
  size?: "normal" | "large" | "small" | "signIn";
  onClick?: () => void;
} & React.ComponentProps<"button">;

const btn = "rounded-custom text-white justify-center items-center";

const getButtonClass = (color: ButtonColor, outline: boolean) => {
  switch (color) {
    case "primary":
      return outline
        ? "border border-primary hover:bg-primary text-text-3-standard transition duration-200"
        : "bg-primary hover:bg-primary-300 text-text-3-standard transition duration-200";
    case "secondary":
      return outline
        ? "border border-secondary hover:bg-secondary text-text-button"
        : "bg-secondary hover:bg-secondary-400 text-text-button";
    case "info":
      return outline
        ? "border border-info hover:bg-info"
        : "bg-info hover:bg-info-400";
  }
};

const buttonSize = {
  small: "py-[4px] px-[8px]",
  normal: "py-[6px] px-[12px]",
  large: "py-[12.8px] px-[28.8px]",
  signIn: "py-[8px] px-[24px]",
};

const Button = ({
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  children = "button",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={`${getButtonClass(color, outline)} ${buttonSize[size]} ${btn}`}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
