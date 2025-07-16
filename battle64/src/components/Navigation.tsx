import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: '🏠 HOME', icon: '🏠' },
  { path: '/profile', label: '👤 PROFILE', icon: '👤' },
  { path: '/fanart', label: '🎨 FANART', icon: '🎨' },
  { path: '/speedruns', label: '⚡ SPEEDRUNS', icon: '⚡' },
  { path: '/quiz', label: '❓ QUIZ', icon: '❓' },
  { path: '/news', label: '📰 NEWS', icon: '📰' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="retro-nav-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `retro-nav-link ${isActive ? 'active' : ''}`
              }
              end={item.path === '/'}
            >
              <span className="retro-flex">
                <span>{item.icon}</span>
                <span style={{ marginLeft: '4px' }}>{item.label}</span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};