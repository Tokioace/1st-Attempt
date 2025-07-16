import React, { useEffect } from 'react';
import { useThemeStore } from '@lib/themeStore';

interface DarkModeToggleProps {
  className?: string;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={`retro-button ${className}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    >
      <span className="retro-flex">
        {isDarkMode ? '🌙' : '☀️'}
        <span className="retro-text-muted" style={{ marginLeft: '8px' }}>
          {isDarkMode ? 'DARK' : 'LIGHT'}
        </span>
      </span>
    </button>
  );
};