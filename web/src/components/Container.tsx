import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {children}
    </div>
  );
}
