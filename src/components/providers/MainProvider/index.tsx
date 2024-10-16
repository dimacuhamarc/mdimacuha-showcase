import { ReactNode } from 'react';

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div className="w-full h-full px-56">
      {children}
    </div>
  );
};
