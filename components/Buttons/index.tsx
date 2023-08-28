export type ButtonCategory =
  | "primary"
  | "secondary"
  | "signIn"
  | "info"
  | "carInfo";

type ButtonProps = {
  outline?: boolean;
  category?: ButtonCategory;
  size?: "normal" | "large" | "small" | "signIn";
  onClick?: () => void;
} & React.ComponentProps<"button">;

const btn = "rounded-custom justify-center items-center";

const getButtonClass = (category: ButtonCategory, outline: boolean) => {
  switch (category) {
    case "primary":
      return "bg-primary text-white hover:bg-primary-300 text-text-3-standard transition duration-200";
    case "secondary":
      return "bg-secondary text-white text-text-3-standard transition duration-200";
    case "signIn":
      return "bg-secondary text-white hover:bg-secondary-400 text-text-button";
    case "carInfo":
      return "bg-secondary text-white text-text-2-bolder border border-secondary";
    case "info":
      return "border text-primary text-text-2-bolder border-primary hover:bg-info";
  }
};

const buttonSize = {
  small: "py-[4px] px-[8px]",
  normal: "py-[6px] px-[12px]",
  large: "py-[12.8px] px-[28.8px]",
  signIn: "py-[8px] px-[24px]",
};

const Button = ({
  category = "primary",
  outline = false,
  size = "normal",
  onClick,
  children = "button",
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={`${getButtonClass(category, outline)} ${
        buttonSize[size]
      } ${btn}`}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
