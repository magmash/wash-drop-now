
import React from 'react';
import Header from './Header';
import MobileTabBar from './MobileTabBar';
import { useIsMobile } from '@/hooks/use-mobile';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isMobile ? 'pb-16' : ''}`}>
        {children}
      </main>
      <MobileTabBar />
    </div>
  );
};

export default PageLayout;
