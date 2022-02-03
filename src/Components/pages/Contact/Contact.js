import React from "react";
import Form from "./Form";
import { Container, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-4" id="contact">
      <h4 className="fs-4 text-muted pb-3 mb-4 border-bottom">Contact</h4>
      <Col className="p-5 mb-4 text-white bg-dark rounded-3">
        <Container fluid className="py-5 ">
          <Form />
        </Container>
      </Col>
    </Container>
  )
}