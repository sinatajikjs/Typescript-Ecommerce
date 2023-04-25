import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, className, disabled, ...props }: IProps) => {
  return (
    <button
      {...props}
      className={`text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full px-4 py-2 text-center disabled:bg-disabled ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;