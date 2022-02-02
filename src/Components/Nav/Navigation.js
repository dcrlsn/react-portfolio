import React from "react";
import './Assets/styles/Header.css'
import { Navbar, Nav, Container, Col } from "react-bootstrap"
import Resume from './Assets/Resume.pdf'


const Navigation = ({ currentPage, handlePageChange }) => {
  return (<header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active me-3' : 'nav-link me-3'}
            >About</Nav.Link>
            <Nav.Link href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active me-3' : 'nav-link me-3'}
            >Projects</Nav.Link>
            <Nav.Link href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active me-3' : 'nav-link me-3'}>Contact</Nav.Link>
            <Nav.Link
              href={Resume}
              download="Daniel Carlson - Resume"
            >Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="position-relative overflow-hidden p-3 p-md-5" id="banner">
      <Container>
        <Col className="p-lg-5 mx-auto my-3 text-start">
          <h1
            className="text-white title">
            Daniel Carlson
          </h1>
        </Col>
      </Container>
    </div>
  </header>
  )
}

export default Navigation