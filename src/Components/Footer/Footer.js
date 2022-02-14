import React from "react";
import './Assets/styles/Footer.css'
import { Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <Container>
      <Row>
        <a
          href="tel:484-893-0943"
          className="text-center col-6 col-sm-3 text-muted">
          <FaPhone size={30} />
          <p>Phone</p></a>
        <a
          href="mailto:carlson.daniel.j@gmail.com"
          className="text-center col-6 col-sm-3 text-muted">
          <FaEnvelope size={30} />
          <p>Email</p></a>
        <a
          href="https://github.com/dcrlsn"
          target="_blank"
          rel="noreferrer"
          className="text-center col-6 col-sm-3 text-muted">
          <FaGithub size={30} />
          <p>Github</p></a>
        <a
          href="https://www.linkedin.com/in/daniel-carlson-45058521a/"
          target="_blank"
          rel="noreferrer"
          className="text-center col-6 col-sm-3 text-muted">
          <FaLinkedin size={30} />
          <p>Linkedin</p></a>
      </Row>
    </Container>
  )
}