export default function Card({ name, github, description, id, deployed }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="h-100 p-5 text-white rounded-3" id={id}>
        <h2>{name}</h2>
        <p>{description}</p>
        <a className="btn btn-outline-light btn-lg mb-3" href={deployed}
          target="_blank">Click Here</a>
        <br />
        <a className="btn btn-outline-light btn-lg" href={github}
          target="_blank">Github</a>
      </div>
    </div>
  )
}