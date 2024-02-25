import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/proj4.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj7.png";
import projImg7 from "../assets/img/proj8.png";
import projImg8 from "../assets/img/proj9.png";
import projImg9 from "../assets/img/proj10.png";
import projImg10 from "../assets/img/pizza.png";
import projImg11 from "../assets/img/proj11.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Roll delivery",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Online store for pets",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Online server for watching movies",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Online store of goods for restaurants",
      description: "Design",
      imgUrl: projImg4,
    },
    {
      title: "Site of the Ukrainian bot development company",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Charitable fund to help children",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [ 
    {
      title: "Gta 6 Form",
      description: "Development",
      imgUrl: projImg7,
    },
    {
      title: "Adventure",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Task Manager",
      description: "Design ",
      imgUrl: projImg9,
    },
    {
      title: "Pizza Online",
      description: "Development",
      imgUrl: projImg10,
    },
    {
      title: "kozhydloshop",
      description: "Design & Development",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>While I am only a teenager learning programming, but I have already done quite a few projects, here are a few of them, you can see more on my github</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects2.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>It's still empty here</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
