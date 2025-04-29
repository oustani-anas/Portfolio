
import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
        Hello! I'm Oustani Anas, a software engineer specializing in backend development and DevOps.
        <br />
        I work with technologies like C/C++, JavaScript, Node.js, NestJS, Docker, Linux, and Git.
        <br />
        I'm passionate about building scalable systems and optimizing development workflows.
        <br />
        Currently, I'm strengthening my skills in DevOps practices, cloud computing, and key principles such as automation, CI/CD, infrastructure as code.
        <br />
        I also have a strong interest in cybersecurity, always exploring how to build more secure and reliable systems.
        <br />
        <br />
        I believe in learning constantly, building efficiently, and solving real-world problems through technology.
      </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
