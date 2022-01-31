import { Button } from "react-bootstrap"

export default function CardButtons({ deployed, github }) {
  return (<>
    <Button variant="outline-light" size="lg" className="mb-3" href={deployed}
      target="_blank">Click Here</Button>
    <br />
    <Button variant="outline-light" size="lg" href={github}
      target="_blank">Github</Button>
  </>
  )
}