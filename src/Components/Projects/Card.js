import CardButtons from "./Cardbuttons"
import { Col, Container, Row } from "react-bootstrap"

export default function Card({ name, github, description, id, deployed, featured }) {


  return (
    <>
      {(featured) ?
        <Col xs={12} className="p-5 mb-4 text-white rounded-3 justify-content-center" id={id}>
          <Container fluid className="py-5">
            <h1 className="display-5 fw-bold">{name}</h1>
            <Col md={8} className="mb-3 fs-4">{description}</Col>
            <CardButtons github={github} deployed={deployed} />
          </Container>
        </Col>
        :
        <Col md={6} className="mb-4">
          <Col className="h-100 p-5 text-white rounded-3" id={id}>
            <h2>{name}</h2>
            <p>{description}</p>
            <CardButtons github={github} deployed={deployed} />
          </Col>
        </Col>}
    </>
  )
}
