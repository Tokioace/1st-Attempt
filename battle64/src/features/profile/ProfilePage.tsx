import React, { useState } from 'react';

export const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState('RetroGamer64');
  const [bio, setBio] = useState('Passionate about classic gaming and speedrunning!');
  const [favoriteGame, setFavoriteGame] = useState('Super Mario Bros');

  return (
    <div className="retro-section">
      <h1 className="retro-title">👤 GAMER PROFILE</h1>
      
      <div className="retro-grid">
        <div className="retro-card">
          <h3 className="retro-subtitle">📊 STATS</h3>
          <div className="retro-flex-column">
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>Games Played:</span>
              <span className="retro-text-secondary">127</span>
            </div>
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>Speedruns:</span>
              <span className="retro-text-secondary">23</span>
            </div>
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>Quiz Score:</span>
              <span className="retro-text-secondary">8,450</span>
            </div>
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>Member Since:</span>
              <span className="retro-text-secondary">2024</span>
            </div>
          </div>
        </div>

        <div className="retro-card">
          <h3 className="retro-subtitle">🏆 ACHIEVEMENTS</h3>
          <div className="retro-flex-column">
            <div className="retro-flex">
              <span>🏅</span>
              <span>First Speedrun</span>
            </div>
            <div className="retro-flex">
              <span>🎯</span>
              <span>Quiz Master</span>
            </div>
            <div className="retro-flex">
              <span>🎨</span>
              <span>Fanart Creator</span>
            </div>
            <div className="retro-flex">
              <span>⭐</span>
              <span>Community Helper</span>
            </div>
          </div>
        </div>
      </div>

      <div className="retro-section">
        <h2 className="retro-subtitle">⚙️ EDIT PROFILE</h2>
        
        <div className="retro-flex-column">
          <div>
            <label htmlFor="username" className="retro-text">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="retro-input"
              style={{ width: '100%', marginTop: '8px' }}
            />
          </div>
          
          <div>
            <label htmlFor="bio" className="retro-text">Bio:</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="retro-input"
              style={{ width: '100%', marginTop: '8px', minHeight: '100px' }}
            />
          </div>
          
          <div>
            <label htmlFor="favoriteGame" className="retro-text">Favorite Game:</label>
            <select
              id="favoriteGame"
              value={favoriteGame}
              onChange={(e) => setFavoriteGame(e.target.value)}
              className="retro-input"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <option value="Super Mario Bros">Super Mario Bros</option>
              <option value="Zelda">Zelda</option>
              <option value="Metroid">Metroid</option>
              <option value="Donkey Kong">Donkey Kong</option>
              <option value="Pac-Man">Pac-Man</option>
              <option value="Tetris">Tetris</option>
            </select>
          </div>
          
          <button className="retro-button">
            💾 SAVE CHANGES
          </button>
        </div>
      </div>

      <div className="retro-section">
        <h2 className="retro-subtitle">🎮 RECENT ACTIVITY</h2>
        <div className="retro-flex-column">
          <div className="retro-card">
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>⚡ New Speedrun Record</span>
              <span className="retro-text-muted">2 hours ago</span>
            </div>
            <p className="retro-text-muted">Super Mario Bros - 5:23.45</p>
          </div>
          
          <div className="retro-card">
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>❓ Quiz Completed</span>
              <span className="retro-text-muted">1 day ago</span>
            </div>
            <p className="retro-text-muted">Score: 950/1000</p>
          </div>
          
          <div className="retro-card">
            <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
              <span>🎨 Fanart Uploaded</span>
              <span className="retro-text-muted">3 days ago</span>
            </div>
            <p className="retro-text-muted">"Mario in Space"</p>
          </div>
        </div>
      </div>
    </div>
  );
};