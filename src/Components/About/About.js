import React from "react";
import { Container, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-4" id="about">
      <h4 className="fs-4 text-muted pb-3 mb-4 border-bottom">About</h4>

      <Col className="p-5 mb-4 text-white bg-dark rounded-3">
        <Container fluid className="py-5">
          <Col md={8} className="py-3 fs-5">I'm a former systems administrator expanding my horizons and skillset into full-stack
            development. With skills in HTML, CSS, Javascript, jQuery, Responsive Design, Bootstrap, and MERN Stack</Col>
        </Container>
      </Col>
    </Container>
  )
}