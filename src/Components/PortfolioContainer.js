import React, { useState } from 'react';
import Navigation from './Nav/Navigation';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Footer from './Footer/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Projects');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="content d-flex flex-column min-vh-100">
      <header>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>
        {renderPage()}
      </main>
      <footer className="py-3 border-top mt-auto">
        <Footer />
      </footer>
    </div>
  );
}