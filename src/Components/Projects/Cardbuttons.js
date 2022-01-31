import { Button } from "react-bootstrap"

export default function CardButtons({ deployed, github }) {
  return (<>
    <Button
      variant="outline-light"
      size="lg"
      className={deployed ? "mb-3" : ''}
      href={deployed ? deployed : github}
      target="_blank">{deployed ? 'Click Here' : 'Github'}
    </Button>
  </>
  )
}