import React, { useState } from 'react';

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
  readTime: number;
  featured: boolean;
}

const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: 'New Speedrun World Record Set in Super Mario Bros',
    content: 'Speedrunner "MarioMaster64" has achieved a new world record in Super Mario Bros Any% category with a time of 4:55.123, beating the previous record by 0.456 seconds. The run was verified by the speedrunning community and features several frame-perfect jumps and glitch executions.',
    author: 'RetroNews Editor',
    date: '2024-01-15',
    category: 'Speedrunning',
    imageUrl: 'https://via.placeholder.com/400x200/00ff00/000000?text=Mario+Speedrun',
    readTime: 3,
    featured: true
  },
  {
    id: 2,
    title: 'Classic NES Games Coming to Modern Consoles',
    content: 'Nintendo has announced that a collection of classic NES games will be available on modern consoles starting next month. The collection includes Super Mario Bros, Zelda, Metroid, and Donkey Kong with enhanced graphics and save states.',
    author: 'Gaming Reporter',
    date: '2024-01-14',
    category: 'Announcements',
    imageUrl: 'https://via.placeholder.com/400x200/ff00ff/000000?text=NES+Collection',
    readTime: 5,
    featured: true
  },
  {
    id: 3,
    title: 'Retro Gaming Convention Announced for Summer 2024',
    content: 'The annual Retro Gaming Convention will take place this summer, featuring tournaments, speedrun competitions, and panels with legendary game developers. Early bird tickets are now available.',
    author: 'Event Coordinator',
    date: '2024-01-13',
    category: 'Events',
    readTime: 2,
    featured: false
  },
  {
    id: 4,
    title: 'Fan Art Contest Winners Announced',
    content: 'The results of our monthly fan art contest are in! Check out the amazing retro gaming artwork submitted by our community members. Winners will receive exclusive prizes and recognition.',
    author: 'Community Manager',
    date: '2024-01-12',
    category: 'Community',
    imageUrl: 'https://via.placeholder.com/400x200/ffff00/000000?text=Fan+Art',
    readTime: 4,
    featured: false
  },
  {
    id: 5,
    title: 'Pac-Man World Record Attempt Live Stream',
    content: 'Join us this weekend for a live stream of a Pac-Man perfect score attempt. The player will attempt to achieve the maximum possible score of 3,333,360 points.',
    author: 'Stream Coordinator',
    date: '2024-01-11',
    category: 'Streaming',
    readTime: 2,
    featured: false
  },
  {
    id: 6,
    title: 'New Retro Gaming Documentary Series',
    content: 'A new documentary series exploring the history of retro gaming is set to premiere next month. The series will cover the golden age of arcade games and the rise of home consoles.',
    author: 'Media Reporter',
    date: '2024-01-10',
    category: 'Media',
    imageUrl: 'https://via.placeholder.com/400x200/00ffff/000000?text=Documentary',
    readTime: 6,
    featured: false
  }
];

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['all', ...Array.from(new Set(mockNews.map(article => article.category)))];

  const filteredNews = mockNews
    .filter(article => selectedCategory === 'all' || article.category === selectedCategory)
    .filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="retro-section">
      <h1 className="retro-title">📰 RETRO GAMING NEWS</h1>
      
      <div className="retro-flex" style={{ gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="newsCategory" className="retro-text">Category:</label>
          <select
            id="newsCategory"
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
          <label htmlFor="newsSearch" className="retro-text">Search:</label>
          <input
            id="newsSearch"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="retro-input"
            style={{ marginLeft: '8px', minWidth: '200px' }}
          />
        </div>
        
        <button className="retro-button">
          📧 SUBSCRIBE TO NEWSLETTER
        </button>
      </div>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <div className="retro-section">
          <h2 className="retro-subtitle">⭐ FEATURED NEWS</h2>
          <div className="retro-grid">
            {featuredNews.map(article => (
              <div key={article.id} className="retro-card">
                {article.imageUrl && (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      marginBottom: '16px',
                      border: '2px solid var(--retro-border)'
                    }}
                  />
                )}
                
                <div className="retro-flex" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="retro-text-secondary">{article.category}</span>
                  <span className="retro-text-muted">📖 {article.readTime} min read</span>
                </div>
                
                <h3 className="retro-subtitle" style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                  {article.title}
                </h3>
                
                <p className="retro-text" style={{ marginBottom: '16px' }}>
                  {article.content.length > 150 
                    ? `${article.content.substring(0, 150)}...` 
                    : article.content
                  }
                </p>
                
                <div className="retro-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="retro-text-muted">By {article.author}</span>
                  <span className="retro-text-muted">{new Date(article.date).toLocaleDateString()}</span>
                </div>
                
                <button className="retro-button" style={{ width: '100%', marginTop: '16px' }}>
                  📖 READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular News */}
      {regularNews.length > 0 && (
        <div className="retro-section">
          <h2 className="retro-subtitle">📰 LATEST NEWS</h2>
          <div className="retro-flex-column">
            {regularNews.map(article => (
              <div key={article.id} className="retro-card">
                <div className="retro-flex" style={{ gap: '16px', alignItems: 'flex-start' }}>
                  {article.imageUrl && (
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      style={{
                        width: '150px',
                        height: '100px',
                        objectFit: 'cover',
                        border: '2px solid var(--retro-border)',
                        flexShrink: 0
                      }}
                    />
                  )}
                  
                  <div style={{ flex: 1 }}>
                    <div className="retro-flex" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span className="retro-text-secondary">{article.category}</span>
                      <span className="retro-text-muted">📖 {article.readTime} min read</span>
                    </div>
                    
                    <h3 className="retro-subtitle" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
                      {article.title}
                    </h3>
                    
                    <p className="retro-text" style={{ marginBottom: '12px' }}>
                      {article.content.length > 200 
                        ? `${article.content.substring(0, 200)}...` 
                        : article.content
                      }
                    </p>
                    
                    <div className="retro-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="retro-text-muted">By {article.author}</span>
                      <span className="retro-text-muted">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                
                <button className="retro-button" style={{ marginTop: '16px' }}>
                  📖 READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredNews.length === 0 && (
        <div className="retro-card retro-text-center">
          <h3 className="retro-subtitle">No news found</h3>
          <p className="retro-text-muted">Try adjusting your filters or search terms!</p>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="retro-section retro-mt-lg">
        <h2 className="retro-subtitle">📧 STAY UPDATED</h2>
        <div className="retro-card">
          <div className="retro-text-center">
            <h3 className="retro-subtitle">Subscribe to our newsletter</h3>
            <p className="retro-text">Get the latest retro gaming news, speedrun updates, and community highlights delivered to your inbox!</p>
            
            <div className="retro-flex" style={{ gap: '16px', marginTop: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="retro-input"
                style={{ minWidth: '300px' }}
              />
              <button className="retro-button">
                📧 SUBSCRIBE
              </button>
            </div>
            
            <p className="retro-text-muted" style={{ marginTop: '16px', fontSize: '0.9rem' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* News Categories */}
      <div className="retro-section retro-mt-lg">
        <h2 className="retro-subtitle">📂 NEWS CATEGORIES</h2>
        <div className="retro-grid">
          {categories.filter(cat => cat !== 'all').map(category => {
            const count = mockNews.filter(article => article.category === category).length;
            return (
              <div key={category} className="retro-card">
                <h3 className="retro-subtitle">{category}</h3>
                <p className="retro-text-muted">{count} articles</p>
                <button 
                  className="retro-button secondary"
                  onClick={() => setSelectedCategory(category)}
                >
                  📰 VIEW ARTICLES
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};