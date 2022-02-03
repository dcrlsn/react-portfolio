import React from "react";
import { Container, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function About() {
  return (
    <Container className="py-4" id="about">
      <h4 className="fs-4 text-muted pb-3 mb-4 border-bottom">About</h4>

      <Col className="p-xs-0 p-sm-5 mb-4 text-white bg-dark rounded-3">
        <Container fluid className="py-5 row justify-content-between">
          <Col md={4} className="order-xs-last text-center"><FaUserCircle size={150} /></Col>
          <Col xs={12} sm={12} md={8} className="py-3 fs-5 order-xs-first">I'm a former systems administrator expanding my horizons and skillset into full-stack
            development. With skills in HTML, CSS, Javascript, jQuery, Responsive Design, Bootstrap, and MERN Stack</Col>
        </Container>
      </Col>
    </Container>
  )
}