import React from "react";
import './Assets/styles/Projects.css'

export default function Projects() {
  return (
    <div className="container py-4" id="projects">
      <div className="pb-3 mb-4 border-bottom">
        <h4 className="fs-4 text-muted">Projects</h4>
      </div>

      <div className="p-5 mb-4 text-white rounded-3" id="gamer">
        <div className="container-fluid py-5 ">
          <h1 className="display-5 fw-bold">Gamer Connect Reviews</h1>
          <p className="col-md-8 fs-4">A full stack, responsive video game review site.</p>
          <a className="btn btn-outline-light btn-lg mb-3" href="https://gamer-connect-123789.herokuapp.com/"
            target="_blank">Click Here</a>
          <br />
          <a className="btn btn-outline-light btn-lg" href="https://github.com/gluupo/gamer-connect-reviews"
            target="_blank">Github</a>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6 mb-4">
          <div className="h-100 p-5 text-white rounded-3" id="weather">
            <h2>Weather Tunes</h2>
            <p>Song recommendations based on the weather of the location you search</p>
            <a className="btn btn-outline-light btn-lg mb-3" href="https://dcrlsn.github.io/weather-tunes/"
              target="_blank">Click Here</a>
            <br />
            <a className="btn btn-outline-light btn-lg" href="https://github.com/dcrlsn/weather-tunes"
              target="_blank">Github</a>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="h-100 p-5 text-white rounded-3" id="password">
            <h2>Password Generator</h2>
            <p>Quickly generate a password of a given length</p>
            <a className="btn btn-outline-light btn-lg mb-3" href="https://dcrlsn.github.io/password-generator/"
              target="_blank">Click Here</a>
            <br />
            <a className="btn btn-outline-light btn-lg" href="https://github.com/dcrlsn/password-generator"
              target="_blank">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}