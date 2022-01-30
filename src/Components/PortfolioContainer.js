import React, { useState } from 'react';
import Navigation from './Nav/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };
  document.body.style.minHeight = "100vh";

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="content d-flex flex-column min-vh-100">
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}