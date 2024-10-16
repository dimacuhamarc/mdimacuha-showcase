import { ReactNode } from 'react';
import NavigationBar from '@/components/common/NavigationBar';

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <>
      <NavigationBar />
      <div className="w-full h-full px-56">{children}</div>
    </>
  );
};
