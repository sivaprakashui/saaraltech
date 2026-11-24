import React, { useEffect, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavItem } from '@/src/data/siteData';
import { initPageAnimations } from '@/src/utils/gsapAnimations';

interface LayoutProps {
  activePage: NavItem['key'];
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ activePage, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <Header activePage={activePage} />
      <main ref={containerRef} className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
