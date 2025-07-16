import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@app/Layout';

// Feature imports
import { HomePage } from '@features/home/HomePage';
import { ProfilePage } from '@features/profile/ProfilePage';
import { FanartPage } from '@features/fanart/FanartPage';
import { SpeedrunsPage } from '@features/speedruns/SpeedrunsPage';
import { QuizPage } from '@features/quiz/QuizPage';
import { NewsPage } from '@features/news/NewsPage';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          
          {/* Feature Routes */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/fanart" element={<FanartPage />} />
          <Route path="/speedruns" element={<SpeedrunsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/news" element={<NewsPage />} />
          
          {/* 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};