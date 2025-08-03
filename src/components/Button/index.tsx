import { cn } from "../../utils/cn";

const Button = ({
  label,
  disabled,
  className,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        "mt-4 px-3 py-2 w-full rounded-[4px] cursor-pointer bg-blue-500 text-white",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
