import React from "react";
import './Assets/styles/Projects.css'
import Card from "./Card";
import { Container, Row } from "react-bootstrap";

export default function Projects() {

  const projects = [{
    name: "MTG Deckbuilder",
    github: "https://github.com/gluupo/dajgy-deckbuilder",
    description: "A MERN stack Magic the Gathering deckbuilder with Graphql",
    id: "mtg",
    deployed: "https://tranquil-falls-52143.herokuapp.com/",
    featured: true,
    key: 1
  },
  {
    name: "Gamer Connect Reviews",
    github: "https://github.com/gluupo/gamer-connect-reviews",
    description: "A full stack, responsive video game review site",
    id: "gamer",
    deployed: "https://gamer-connect-123789.herokuapp.com/",
    key: 2
  }, {
    name: "Weather Tunes",
    github: "https://github.com/dcrlsn/weather-tunes",
    description: "Song recommendations based on the weather of the location you search",
    id: "weather",
    deployed: "https://dcrlsn.github.io/weather-tunes/",
    key: 3
  }, {
    name: "Password Generator",
    github: "https://github.com/dcrlsn/password-generator",
    description: "Quickly generate a password of a given length",
    id: "password",
    deployed: "https://dcrlsn.github.io/password-generator/",
    key: 4
  }, {
    name: "PWA Text Editor",
    github: "https://github.com/dcrlsn/pwa-texteditor/",
    description: "A simple text editor built with webpack",
    id: "texteditor",
    deployed: "https://secret-depths-74231.herokuapp.com/",
    key: 5
  }, {
    name: "NoSQL Social Network API",
    github: "https://github.com/dcrlsn/nosql-social-network-api",
    description: "Sample backend API utilizing node, express, mongodb, and mongoose",
    id: "social",
    deployed: "https://watch.screencastify.com/v/iVax1d5zUF3rnE4vG1F6",
    key: 6
  }, {
    name: "Code Quiz",
    github: "https://www.github.com/dcrlsn/code-quiz/",
    description: "A coding quiz built using javascript",
    id: "quiz",
    deployed: "https://dcrlsn.github.io/code-quiz/",
    key: 7
  }]

  // const unfeatured = projects.slice(1, projects.length)

  return (
    <Container className="py-4" id="projects">
      <h4 className="pb-3 mb-4 border-bottom fs-4 text-muted">Projects</h4>
      <Row className="text-white">
        {projects.map(project => (
          <Card {...project} key={project.key} />
        ))}
      </Row>
    </Container>
  )
}