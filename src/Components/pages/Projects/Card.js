import CardButtons from "./Cardbuttons"
import { Col } from "react-bootstrap"

export default function Card({ name, github, description, id, deployed, featured }) {


  return (
    <>
      <Col
        xs={12}
        md={featured ? 12 : 6}
        className={featured ? "p-5 mb-4 rounded-3" : 'mb-4'}
        id={featured ? id : ''}>
        <Col
          className={featured ? "py-5" : "h-100 p-5 text-white rounded-3"}
          id={!featured ? id : ''}>
          {featured ? <h1 className="display-5 fw-bold">{name}</h1> : <h2>{name}</h2>}
          <Col
            md={featured ? 8 : 12}
            className={featured ? "mb-3 fs-4" : "mb-3"}
          > {description}</Col>
          <CardButtons
            deployed={deployed}
          />
          <br />
          <CardButtons
            github={github}
          />
        </Col>
      </Col>
    </>
  )
}
