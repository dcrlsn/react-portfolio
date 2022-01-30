export default function Featured({ name, github, description, id, deployed }) {
  return (
    <div className="p-5 mb-4 text-white rounded-3" id={id}>
      <div className="container-fluid py-5 ">
        <h1 className="display-5 fw-bold">{name}</h1>
        <p className="col-md-8 fs-4">{description}</p>
        <a className="btn btn-outline-light btn-lg mb-3" href={deployed}
          target="_blank">Click Here</a>
        <br />
        <a className="btn btn-outline-light btn-lg" href={github}
          target="_blank">Github</a>
      </div>
    </div>
  )
}