import React, { useState } from 'react';

interface SpeedrunRecord {
  id: number;
  game: string;
  category: string;
  player: string;
  time: string;
  date: string;
  platform: string;
  verified: boolean;
  videoUrl?: string;
}

const mockSpeedruns: SpeedrunRecord[] = [
  {
    id: 1,
    game: 'Super Mario Bros',
    category: 'Any%',
    player: 'SpeedRunner64',
    time: '4:55.123',
    date: '2024-01-15',
    platform: 'NES',
    verified: true,
    videoUrl: 'https://youtube.com/watch?v=example1'
  },
  {
    id: 2,
    game: 'Super Mario Bros',
    category: '100%',
    player: 'MarioMaster',
    time: '19:42.567',
    date: '2024-01-14',
    platform: 'NES',
    verified: true,
    videoUrl: 'https://youtube.com/watch?v=example2'
  },
  {
    id: 3,
    game: 'Zelda',
    category: 'Any%',
    player: 'LinkRunner',
    time: '28:15.890',
    date: '2024-01-13',
    platform: 'NES',
    verified: true,
    videoUrl: 'https://youtube.com/watch?v=example3'
  },
  {
    id: 4,
    game: 'Metroid',
    category: 'Any%',
    player: 'SamusSpeed',
    time: '42:33.456',
    date: '2024-01-12',
    platform: 'NES',
    verified: false
  },
  {
    id: 5,
    game: 'Donkey Kong',
    category: 'Any%',
    player: 'DKMaster',
    time: '1:23.789',
    date: '2024-01-11',
    platform: 'Arcade',
    verified: true,
    videoUrl: 'https://youtube.com/watch?v=example5'
  },
  {
    id: 6,
    game: 'Pac-Man',
    category: 'Perfect Score',
    player: 'PacMaster',
    time: '3:33.333',
    date: '2024-01-10',
    platform: 'Arcade',
    verified: true,
    videoUrl: 'https://youtube.com/watch?v=example6'
  }
];

export const SpeedrunsPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('time');

  const games = ['all', ...Array.from(new Set(mockSpeedruns.map(item => item.game)))];
  const categories = ['all', ...Array.from(new Set(mockSpeedruns.map(item => item.category)))];

  const filteredSpeedruns = mockSpeedruns
    .filter(item => selectedGame === 'all' || item.game === selectedGame)
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      // Sort by time (convert to seconds for comparison)
      const timeA = parseTimeToSeconds(a.time);
      const timeB = parseTimeToSeconds(b.time);
      return timeA - timeB;
    });

  function parseTimeToSeconds(time: string): number {
    const parts = time.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
    }
    return parseFloat(time);
  }

  function formatTime(time: string): string {
    return time.padStart(8, '0');
  }

  return (
    <div className="retro-section">
      <h1 className="retro-title">⚡ SPEEDRUN LEADERBOARDS</h1>
      
      <div className="retro-flex" style={{ gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="gameFilter" className="retro-text">Game:</label>
          <select
            id="gameFilter"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="retro-input"
            style={{ marginLeft: '8px' }}
          >
            {games.map(game => (
              <option key={game} value={game}>
                {game === 'all' ? 'All Games' : game}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="categoryFilter" className="retro-text">Category:</label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="retro-input"
            style={{ marginLeft: '8px' }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="sortBy" className="retro-text">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="retro-input"
            style={{ marginLeft: '8px' }}
          >
            <option value="time">Time</option>
            <option value="date">Date</option>
          </select>
        </div>
        
        <button className="retro-button">
          ⚡ SUBMIT RUN
        </button>
      </div>

      <div className="retro-card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--retro-border)' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Rank</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Game</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Player</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Time</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Platform</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSpeedruns.map((record, index) => (
              <tr key={record.id} style={{ borderBottom: '1px solid var(--retro-border-secondary)' }}>
                <td style={{ padding: '12px' }}>
                  <span style={{ fontWeight: 'bold' }}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>{record.game}</td>
                <td style={{ padding: '12px' }}>{record.category}</td>
                <td style={{ padding: '12px' }}>{record.player}</td>
                <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 'bold' }}>
                  {formatTime(record.time)}
                </td>
                <td style={{ padding: '12px' }}>{record.platform}</td>
                <td style={{ padding: '12px' }}>{new Date(record.date).toLocaleDateString()}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{ color: record.verified ? 'var(--retro-primary)' : 'var(--retro-accent)' }}>
                    {record.verified ? '✅ Verified' : '⏳ Pending'}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <div className="retro-flex" style={{ gap: '8px' }}>
                    {record.videoUrl && (
                      <button className="retro-button" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
                        📺 Watch
                      </button>
                    )}
                    <button className="retro-button secondary" style={{ fontSize: '0.8rem', padding: '4px 8px' }}>
                      💬 Comment
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredSpeedruns.length === 0 && (
        <div className="retro-card retro-text-center">
          <h3 className="retro-subtitle">No speedruns found</h3>
          <p className="retro-text-muted">Try adjusting your filters or be the first to submit a run!</p>
        </div>
      )}

      <div className="retro-section retro-mt-lg">
        <h2 className="retro-subtitle">⚡ SUBMIT YOUR SPEEDRUN</h2>
        <div className="retro-card">
          <div className="retro-flex-column">
            <div>
              <label htmlFor="runGame" className="retro-text">Game:</label>
              <select
                id="runGame"
                className="retro-input"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <option value="">Select a game</option>
                <option value="Super Mario Bros">Super Mario Bros</option>
                <option value="Zelda">Zelda</option>
                <option value="Metroid">Metroid</option>
                <option value="Donkey Kong">Donkey Kong</option>
                <option value="Pac-Man">Pac-Man</option>
                <option value="Tetris">Tetris</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="runCategory" className="retro-text">Category:</label>
              <select
                id="runCategory"
                className="retro-input"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <option value="">Select a category</option>
                <option value="Any%">Any%</option>
                <option value="100%">100%</option>
                <option value="Glitchless">Glitchless</option>
                <option value="Low%">Low%</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="runTime" className="retro-text">Time (MM:SS.mmm):</label>
              <input
                id="runTime"
                type="text"
                className="retro-input"
                placeholder="5:23.456"
                style={{ width: '100%', marginTop: '8px' }}
              />
            </div>
            
            <div>
              <label htmlFor="runPlatform" className="retro-text">Platform:</label>
              <select
                id="runPlatform"
                className="retro-input"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <option value="">Select platform</option>
                <option value="NES">NES</option>
                <option value="SNES">SNES</option>
                <option value="Arcade">Arcade</option>
                <option value="Emulator">Emulator</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="runVideo" className="retro-text">Video URL (optional):</label>
              <input
                id="runVideo"
                type="url"
                className="retro-input"
                placeholder="https://youtube.com/watch?v=..."
                style={{ width: '100%', marginTop: '8px' }}
              />
            </div>
            
            <div>
              <label htmlFor="runNotes" className="retro-text">Notes:</label>
              <textarea
                id="runNotes"
                className="retro-input"
                placeholder="Any additional notes about your run..."
                style={{ width: '100%', marginTop: '8px', minHeight: '100px' }}
              />
            </div>
            
            <button className="retro-button">
              🚀 SUBMIT RUN
            </button>
          </div>
        </div>
      </div>

      <div className="retro-section retro-mt-lg">
        <h2 className="retro-subtitle">🏆 WORLD RECORDS</h2>
        <div className="retro-grid">
          {games.filter(game => game !== 'all').map(game => {
            const gameRuns = mockSpeedruns.filter(run => run.game === game);
            const anyPercent = gameRuns.find(run => run.category === 'Any%');
            const hundredPercent = gameRuns.find(run => run.category === '100%');
            
            return (
              <div key={game} className="retro-card">
                <h3 className="retro-subtitle">{game}</h3>
                <div className="retro-flex-column">
                  {anyPercent && (
                    <div>
                      <span className="retro-text-secondary">Any%:</span>
                      <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                        {formatTime(anyPercent.time)}
                      </span>
                      <span className="retro-text-muted">by {anyPercent.player}</span>
                    </div>
                  )}
                  {hundredPercent && (
                    <div>
                      <span className="retro-text-secondary">100%:</span>
                      <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                        {formatTime(hundredPercent.time)}
                      </span>
                      <span className="retro-text-muted">by {hundredPercent.player}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};