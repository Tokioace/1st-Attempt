import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@components/Navigation';
import { DarkModeToggle } from '@components/DarkModeToggle';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="retro-scanlines">
      <header className="retro-nav">
        <div className="retro-container">
          <div className="retro-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="retro-title" style={{ margin: 0, fontSize: '1.5rem' }}>
              🕹️ BATTLE64
            </div>
            <Navigation />
            <DarkModeToggle />
          </div>
        </div>
      </header>
      
      <main className="retro-container">
        {children || <Outlet />}
      </main>
      
      <footer className="retro-footer retro-text-center retro-p-md">
        <div className="retro-container">
          <p className="retro-text-muted">
            © 2024 Battle64 - Retro Gaming Community
          </p>
        </div>
      </footer>
    </div>
  );
};