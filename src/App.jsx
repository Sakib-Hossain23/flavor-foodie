import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';





import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Book from './components/Book';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
