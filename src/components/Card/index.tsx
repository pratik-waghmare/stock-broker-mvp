import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center border-[1px] border-gray-100 rounded-[4px] p-4 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
