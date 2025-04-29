
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogoo from "../../Assets/images/ImageApr22_2.png"
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About.jsx"
import Projects from "../Projects/Projects.jsx"
import Resume from "../Resume/ResumeNew.jsx"
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">  OUSTANI ANAS </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogoo}
                alt="home pic"
                className="img-fluid"
                style={{ width: "900px", maxWidth: "600px", height: "200" }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
  <ul className="home-about-social-links list-inline">
    <li className="list-inline-item social-icons">
      <a
        href="https://github.com/oustani-anas"
        target="_blank"
        rel="noreferrer"
        className="home-social-icons"
        
      >
        <AiFillGithub />
      </a>
    </li>
    <li className="list-inline-item social-icons">
      <a
        href="https://www.linkedin.com/in/oustani-anas/"
        target="_blank"
        rel="noreferrer"
        className="home-social-icons"
      >
        <FaLinkedinIn />
      </a>
        </li>
        </ul>
      </Row>
        </Container>
      </Container>
      
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="resume">
        <Resume />
      </section>
    
    </section>

  );
}

export default Home;
