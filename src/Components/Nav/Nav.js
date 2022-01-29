import React from "react";
import './Assets/styles/Header.css'

const Nav = ({ currentPage, handlePageChange }) => {
  return (<header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                href="#about">About</a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="./assets/Resume.pdf" download>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="position-relative overflow-hidden p-3 p-md-5 text-center" id="banner">
      <div className="col-md-5 p-lg-5 mx-auto my-5 text-start">
        <h1
          className="text-white">
          Daniel Carlson
        </h1>
      </div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  </header>
  )
}

export default Nav