import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='container mx-auto'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/search/:name' element={<DetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
