import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="retro-section">
      <h1 className="retro-title retro-text-center">
        🕹️ WELCOME TO BATTLE64 🕹️
      </h1>
      
      <div className="retro-text retro-text-center retro-mb-lg">
        <p>Your ultimate retro gaming community platform</p>
        <p>Experience the nostalgia of classic gaming with modern features</p>
      </div>

      <div className="retro-grid">
        <div className="retro-card">
          <h3 className="retro-subtitle">👤 Profile</h3>
          <p className="retro-text">Create and customize your gaming profile</p>
          <Link to="/profile" className="retro-button">
            VIEW PROFILE
          </Link>
        </div>

        <div className="retro-card">
          <h3 className="retro-subtitle">🎨 Fanart</h3>
          <p className="retro-text">Share and discover amazing fanart</p>
          <Link to="/fanart" className="retro-button">
            BROWSE FANART
          </Link>
        </div>

        <div className="retro-card">
          <h3 className="retro-subtitle">⚡ Speedruns</h3>
          <p className="retro-text">Watch and submit speedrun records</p>
          <Link to="/speedruns" className="retro-button">
            VIEW SPEEDRUNS
          </Link>
        </div>

        <div className="retro-card">
          <h3 className="retro-subtitle">❓ Quiz</h3>
          <p className="retro-text">Test your gaming knowledge</p>
          <Link to="/quiz" className="retro-button">
            START QUIZ
          </Link>
        </div>

        <div className="retro-card">
          <h3 className="retro-subtitle">📰 News</h3>
          <p className="retro-text">Latest gaming news and updates</p>
          <Link to="/news" className="retro-button">
            READ NEWS
          </Link>
        </div>

        <div className="retro-card">
          <h3 className="retro-subtitle">🎮 Community</h3>
          <p className="retro-text">Connect with fellow retro gamers</p>
          <button className="retro-button" disabled>
            COMING SOON
          </button>
        </div>
      </div>

      <div className="retro-section retro-mt-lg">
        <h2 className="retro-subtitle retro-text-center">🎯 FEATURED GAMES</h2>
        <div className="retro-grid">
          <div className="retro-card">
            <h4>Super Mario Bros</h4>
            <p className="retro-text-muted">Classic platformer</p>
          </div>
          <div className="retro-card">
            <h4>Zelda</h4>
            <p className="retro-text-muted">Epic adventure</p>
          </div>
          <div className="retro-card">
            <h4>Metroid</h4>
            <p className="retro-text-muted">Sci-fi exploration</p>
          </div>
          <div className="retro-card">
            <h4>Donkey Kong</h4>
            <p className="retro-text-muted">Arcade classic</p>
          </div>
        </div>
      </div>
    </div>
  );
};