import type { ReactNode } from "react";

interface iContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: iContainerProps) => {
  return (
    <div className={`max-w-[1440px] w-full px-6 mx-auto ${className}`}>
      {children}
    </div>
  );
};
