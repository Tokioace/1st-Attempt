import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: 'What year was the Nintendo Entertainment System (NES) released in North America?',
    options: ['1983', '1985', '1987', '1989'],
    correctAnswer: 1,
    category: 'History',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: 'What is the name of the main character in Super Mario Bros?',
    options: ['Luigi', 'Mario', 'Toad', 'Bowser'],
    correctAnswer: 1,
    category: 'Characters',
    difficulty: 'easy'
  },
  {
    id: 3,
    question: 'What is the name of the princess in The Legend of Zelda?',
    options: ['Zelda', 'Link', 'Ganon', 'Impa'],
    correctAnswer: 0,
    category: 'Characters',
    difficulty: 'easy'
  },
  {
    id: 4,
    question: 'What is the maximum score possible in Pac-Man?',
    options: ['3,333,360', '3,333,330', '3,333,300', '3,333,270'],
    correctAnswer: 0,
    category: 'Gameplay',
    difficulty: 'hard'
  },
  {
    id: 5,
    question: 'What is the name of the main character in Metroid?',
    options: ['Samus Aran', 'Ridley', 'Mother Brain', 'Kraid'],
    correctAnswer: 0,
    category: 'Characters',
    difficulty: 'medium'
  },
  {
    id: 6,
    question: 'What is the name of the villain in Donkey Kong?',
    options: ['Donkey Kong', 'Mario', 'Pauline', 'Jumpman'],
    correctAnswer: 0,
    category: 'Characters',
    difficulty: 'medium'
  },
  {
    id: 7,
    question: 'What is the highest level possible in Tetris?',
    options: ['Level 15', 'Level 29', 'Level 30', 'Level 255'],
    correctAnswer: 1,
    category: 'Gameplay',
    difficulty: 'hard'
  },
  {
    id: 8,
    question: 'What is the name of the first level in Super Mario Bros?',
    options: ['World 1-1', 'Level 1', 'Stage 1', 'Area 1'],
    correctAnswer: 0,
    category: 'Gameplay',
    difficulty: 'easy'
  }
];

export const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(mockQuestions.map(q => q.category)))];
  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const filteredQuestions = mockQuestions
    .filter(q => selectedCategory === 'all' || q.category === selectedCategory)
    .filter(q => selectedDifficulty === 'all' || q.difficulty === selectedDifficulty);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const totalQuestions = filteredQuestions.length;

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'var(--retro-primary)';
      case 'medium': return 'var(--retro-accent)';
      case 'hard': return 'var(--retro-secondary)';
      default: return 'var(--retro-text)';
    }
  };

  if (!quizStarted) {
    return (
      <div className="retro-section">
        <h1 className="retro-title">❓ RETRO GAMING QUIZ</h1>
        
        <div className="retro-text retro-text-center retro-mb-lg">
          <p>Test your knowledge of classic retro games!</p>
          <p>Choose your preferences and start the quiz.</p>
        </div>

        <div className="retro-card">
          <div className="retro-flex-column">
            <div>
              <label htmlFor="quizCategory" className="retro-text">Category:</label>
              <select
                id="quizCategory"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="retro-input"
                style={{ width: '100%', marginTop: '8px' }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="quizDifficulty" className="retro-text">Difficulty:</label>
              <select
                id="quizDifficulty"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="retro-input"
                style={{ width: '100%', marginTop: '8px' }}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="retro-text-center">
              <p className="retro-text-muted">
                Questions available: {filteredQuestions.length}
              </p>
            </div>
            
            <button 
              className="retro-button" 
              onClick={startQuiz}
              disabled={filteredQuestions.length === 0}
            >
              🚀 START QUIZ
            </button>
          </div>
        </div>

        <div className="retro-section retro-mt-lg">
          <h2 className="retro-subtitle">📊 QUIZ STATISTICS</h2>
          <div className="retro-grid">
            <div className="retro-card">
              <h3 className="retro-subtitle">Categories</h3>
              <div className="retro-flex-column">
                {categories.filter(cat => cat !== 'all').map(category => {
                  const count = mockQuestions.filter(q => q.category === category).length;
                  return (
                    <div key={category} className="retro-flex" style={{ justifyContent: 'space-between' }}>
                      <span>{category}:</span>
                      <span className="retro-text-secondary">{count} questions</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="retro-card">
              <h3 className="retro-subtitle">Difficulty</h3>
              <div className="retro-flex-column">
                {difficulties.filter(diff => diff !== 'all').map(difficulty => {
                  const count = mockQuestions.filter(q => q.difficulty === difficulty).length;
                  return (
                    <div key={difficulty} className="retro-flex" style={{ justifyContent: 'space-between' }}>
                      <span style={{ color: getDifficultyColor(difficulty) }}>
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}:
                      </span>
                      <span className="retro-text-secondary">{count} questions</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
      message = 'Excellent! You\'re a retro gaming master!';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = 'Great job! You know your retro games well!';
      emoji = '🎯';
    } else if (percentage >= 50) {
      message = 'Good effort! Keep learning about retro games!';
      emoji = '👍';
    } else {
      message = 'Keep practicing! Retro gaming knowledge takes time!';
      emoji = '📚';
    }

    return (
      <div className="retro-section">
        <h1 className="retro-title retro-text-center">🎉 QUIZ COMPLETE!</h1>
        
        <div className="retro-card retro-text-center">
          <h2 className="retro-subtitle">{emoji} {message}</h2>
          
          <div className="retro-flex-column" style={{ alignItems: 'center', marginTop: '24px' }}>
            <div className="retro-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
              Score: {score}/{totalQuestions}
            </div>
            <div className="retro-text" style={{ fontSize: '1.5rem', color: 'var(--retro-accent)' }}>
              {percentage}%
            </div>
          </div>
          
          <div className="retro-flex" style={{ gap: '16px', marginTop: '24px', justifyContent: 'center' }}>
            <button className="retro-button" onClick={resetQuiz}>
              🔄 TRY AGAIN
            </button>
            <button className="retro-button secondary" onClick={() => window.location.reload()}>
              🏠 BACK TO MENU
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-section">
      <h1 className="retro-title">❓ RETRO GAMING QUIZ</h1>
      
      <div className="retro-flex" style={{ justifyContent: 'space-between', marginBottom: '24px' }}>
        <div className="retro-text">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
        <div className="retro-text">
          Score: {score}
        </div>
      </div>

      <div className="retro-card">
        <div className="retro-flex" style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
          <span className="retro-text-secondary">Category: {currentQuestion.category}</span>
          <span style={{ color: getDifficultyColor(currentQuestion.difficulty) }}>
            {currentQuestion.difficulty.toUpperCase()}
          </span>
        </div>
        
        <h2 className="retro-subtitle" style={{ marginBottom: '24px' }}>
          {currentQuestion.question}
        </h2>
        
        <div className="retro-flex-column">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`retro-button ${selectedAnswer === index ? 'active' : ''}`}
              style={{
                textAlign: 'left',
                justifyContent: 'flex-start',
                backgroundColor: selectedAnswer === index ? 'var(--retro-primary)' : 'transparent',
                color: selectedAnswer === index ? 'var(--retro-bg)' : 'var(--retro-text)'
              }}
            >
              <span style={{ marginRight: '12px', fontWeight: 'bold' }}>
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
        
        <div className="retro-flex" style={{ justifyContent: 'center', marginTop: '24px' }}>
          <button
            className="retro-button"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestionIndex + 1 < totalQuestions ? '➡️ NEXT QUESTION' : '🏁 FINISH QUIZ'}
          </button>
        </div>
      </div>
    </div>
  );
};