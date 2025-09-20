
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bash from "../../Assets/Projects/Bash.png";
import cub3d from "../../Assets/Projects/images.jpeg";
import inception from "../../Assets/Projects/ChatGPTInceptionvm.png";
import pingpong from "../../Assets/Projects/organiser-tournoi-ping-pong.jpg";
import ticket from "../../Assets/Projects/ticket.png";
import irc from "../../Assets/Projects/ChatGPT IRC rec.png";
import problemsolv from "../../Assets/Projects/problemSolving.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              title="Smart Ticket System"
              description="Currently working on a Smart System Ticketing project as part of my internship. The system is designed to streamline support ticket management by enabling efficient issue tracking, assignment, and resolution. It leverages modern web technologies to provide a user-friendly interface for both users and administrators."
              ghLink="https://github.com/oustani-anas/Smart_ticket_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pingpong}
  
              title="Ft_transendence (team)"
              description="Developed a real-time multiplayer Pong web application with a user-friendly interface as part of a team. The project featured secure authentication, user profile management, and a chat system for seamless communication. Leveraged Docker Compose to efficiently orchestrate the frontend (Next.js), backend (Nest.js), and database (PostgreSQL)."
              ghLink="https://github.com/sharrach/Ft_Transcendence"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inception}
              title="Inception"
              description="The goal of this project is to provide a step-by-step guide for building and running Docker containers for NGINX (web server), MariaDB (database server), and WordPress (content management system) within a local virtual machine."
              ghLink="https://github.com/oustani-anas/inception"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={irc}
              title="Ft_irc (team)"
              description="Built a lightweight IRC server in C++ using non-blocking sockets, supporting multi-client connections, channels, and core messaging commands. Implemented RFC-compliant authentication and operator controls."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bash}
              title="MiniShell (team)"
              description="Developed Minishell, a custom command-line interpreter in C. This project involved parsing user input, managing processes (fork, execve), and implementing core shell features like I/O redirection (<, >, <<, >>), pipes (|), signal handling (Ctrl+C), environment variable expansion, and essential built-in commands (cd, echo, exit, etc.)."
              ghLink="https://github.com/oustani-anas/minish.git"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cub3d}
              title="Cub3D (team)"
              description="cub3D is a project that recreates a 3D maze environment from a first-person perspective using raycasting and the miniLibX library. Users can navigate the maze, rendered with textured walls and defined floor and ceiling colors, through keyboard input."
              ghLink="https://github.com/oustani-anas/cub3d"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={problemsolv}
              title="Problem Solving Practice"
              description="This contains my solutions to a variety of coding problems from Codeforces and LeetCode.
              It showcases my approach to problem-solving, algorithmic thinking, and good practice in languages like C++."
              ghLink="https://github.com/oustani-anas/codef_problems"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
