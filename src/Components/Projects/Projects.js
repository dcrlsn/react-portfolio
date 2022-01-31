import React from "react";
import './Assets/styles/Projects.css'
import Card from "./Card";

export default function Projects() {

  const projects = [{
    name: "Gamer Connect Reviews",
    github: "https://github.com/gluupo/gamer-connect-reviews",
    description: "A full stack, responsive video game review site",
    id: "gamer",
    deployed: "https://gamer-connect-123789.herokuapp.com/",
    featured: true
  }, {
    name: "Weather Tunes",
    github: "https://github.com/dcrlsn/weather-tunes",
    description: "Song recommendations based on the weather of the location you search",
    id: "weather",
    deployed: "https://dcrlsn.github.io/weather-tunes/"
  }, {
    name: "Password Generator",
    github: "https://github.com/dcrlsn/weather-tunes",
    description: "Quickly generate a password of a given length",
    id: "password",
    deployed: "https://dcrlsn.github.io/password-generator/"
  }, {
    name: "PWA Text Editor",
    github: "https://github.com/dcrlsn/pwa-texteditor/blob/main/client/package.json",
    description: "A simple text editor built with webpack",
    id: "texteditor",
    deployed: "https://secret-depths-74231.herokuapp.com/"
  }, {
    name: "NoSQL Social Network API",
    github: "https://github.com/dcrlsn/nosql-social-network-api",
    description: "Sample backend API utilizing node, express, mongodb, and mongoose",
    id: "social",
    deployed: "https://watch.screencastify.com/v/iVax1d5zUF3rnE4vG1F6"
  }, {
    name: "Code Quiz",
    github: "https://www.github.com/dcrlsn/code-quiz/",
    description: "A coding quiz built using javascript",
    id: "quiz",
    deployed: "https://dcrlsn.github.io/code-quiz/"
  }]

  // const unfeatured = projects.slice(1, projects.length)

  return (
    <div className="container py-4" id="projects">
      <div className="pb-3 mb-4 border-bottom">
        <h4 className="fs-4 text-muted">Projects</h4>
      </div>
      <div className="row justify-content-between d-flex">
        {projects.map(project => (
          <Card {...project} />
        ))}
      </div>
    </div>
  )
}