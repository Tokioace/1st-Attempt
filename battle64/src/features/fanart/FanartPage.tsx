import React, { useState } from 'react';

interface FanartItem {
  id: number;
  title: string;
  artist: string;
  game: string;
  imageUrl: string;
  likes: number;
  date: string;
}

const mockFanart: FanartItem[] = [
  {
    id: 1,
    title: 'Mario in Space',
    artist: 'PixelArtist64',
    game: 'Super Mario Bros',
    imageUrl: 'https://via.placeholder.com/300x200/00ff00/000000?text=Mario+Space',
    likes: 127,
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Zelda Adventure',
    artist: 'RetroDrawer',
    game: 'Zelda',
    imageUrl: 'https://via.placeholder.com/300x200/ff00ff/000000?text=Zelda+Art',
    likes: 89,
    date: '2024-01-14'
  },
  {
    id: 3,
    title: 'Metroid Hunter',
    artist: 'GameArtist',
    game: 'Metroid',
    imageUrl: 'https://via.placeholder.com/300x200/ffff00/000000?text=Metroid+Art',
    likes: 156,
    date: '2024-01-13'
  },
  {
    id: 4,
    title: 'Donkey Kong Classic',
    artist: 'PixelMaster',
    game: 'Donkey Kong',
    imageUrl: 'https://via.placeholder.com/300x200/ff0000/000000?text=DK+Art',
    likes: 203,
    date: '2024-01-12'
  },
  {
    id: 5,
    title: 'Pac-Man Maze',
    artist: 'RetroCreator',
    game: 'Pac-Man',
    imageUrl: 'https://via.placeholder.com/300x200/00ffff/000000?text=Pac-Man+Art',
    likes: 78,
    date: '2024-01-11'
  },
  {
    id: 6,
    title: 'Tetris Blocks',
    artist: 'BlockArtist',
    game: 'Tetris',
    imageUrl: 'https://via.placeholder.com/300x200/ff8800/000000?text=Tetris+Art',
    likes: 134,
    date: '2024-01-10'
  }
];

export const FanartPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  const filteredFanart = mockFanart
    .filter(item => selectedGame === 'all' || item.game === selectedGame)
    .sort((a, b) => {
      if (sortBy === 'likes') {
        return b.likes - a.likes;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const games = ['all', ...Array.from(new Set(mockFanart.map(item => item.game)))];

  return (
    <div className="retro-section">
      <h1 className="retro-title">🎨 FANART GALLERY</h1>
      
      <div className="retro-flex" style={{ gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="gameFilter" className="retro-text">Filter by Game:</label>
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
          <label htmlFor="sortBy" className="retro-text">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="retro-input"
            style={{ marginLeft: '8px' }}
          >
            <option value="date">Date</option>
            <option value="likes">Likes</option>
          </select>
        </div>
        
        <button className="retro-button">
          🎨 UPLOAD FANART
        </button>
      </div>

      <div className="retro-grid">
        {filteredFanart.map(item => (
          <div key={item.id} className="retro-card">
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                marginBottom: '16px',
                border: '2px solid var(--retro-border)'
              }}
            />
            
            <h3 className="retro-subtitle" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
              {item.title}
            </h3>
            
            <div className="retro-flex-column">
              <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
                <span className="retro-text-secondary">Artist:</span>
                <span>{item.artist}</span>
              </div>
              
              <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
                <span className="retro-text-secondary">Game:</span>
                <span>{item.game}</span>
              </div>
              
              <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
                <span className="retro-text-secondary">Likes:</span>
                <span>❤️ {item.likes}</span>
              </div>
              
              <div className="retro-flex" style={{ justifyContent: 'space-between' }}>
                <span className="retro-text-secondary">Date:</span>
                <span>{new Date(item.date).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="retro-flex" style={{ gap: '8px', marginTop: '16px' }}>
              <button className="retro-button" style={{ flex: 1 }}>
                ❤️ LIKE
              </button>
              <button className="retro-button secondary" style={{ flex: 1 }}>
                💬 COMMENT
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredFanart.length === 0 && (
        <div className="retro-card retro-text-center">
          <h3 className="retro-subtitle">No fanart found</h3>
          <p className="retro-text-muted">Try adjusting your filters or be the first to upload fanart!</p>
        </div>
      )}

      <div className="retro-section retro-mt-lg">
        <h2 className="retro-subtitle">🎨 UPLOAD YOUR FANART</h2>
        <div className="retro-card">
          <div className="retro-flex-column">
            <div>
              <label htmlFor="artTitle" className="retro-text">Title:</label>
              <input
                id="artTitle"
                type="text"
                className="retro-input"
                placeholder="Enter artwork title"
                style={{ width: '100%', marginTop: '8px' }}
              />
            </div>
            
            <div>
              <label htmlFor="artGame" className="retro-text">Game:</label>
              <select
                id="artGame"
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
              <label htmlFor="artFile" className="retro-text">Image File:</label>
              <input
                id="artFile"
                type="file"
                accept="image/*"
                className="retro-input"
                style={{ width: '100%', marginTop: '8px' }}
              />
            </div>
            
            <div>
              <label htmlFor="artDescription" className="retro-text">Description:</label>
              <textarea
                id="artDescription"
                className="retro-input"
                placeholder="Describe your artwork..."
                style={{ width: '100%', marginTop: '8px', minHeight: '100px' }}
              />
            </div>
            
            <button className="retro-button">
              🚀 UPLOAD FANART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};