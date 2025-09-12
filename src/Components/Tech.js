// src/Components/TechnologiesSection.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// You can replace these URLs with your own tech logos
const technologies = [
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "Bootstrap", logo: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "TensorFlow", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
  { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" },
  { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "GraphQL", logo: "https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg" },
  { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Sass", logo: "https://cdn.worldvectorlogo.com/logos/sass-1.svg" }
];

export default function TechnologiesSection() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Technologies We Use</h2>
          <p className="text-muted">
            We leverage modern technologies to build websites, web apps, and AI-powered applications.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {technologies.map((tech, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index}>
              <Card className="h-100 border-0 text-center p-3 hover-effect d-flex flex-column align-items-center justify-content-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="img-fluid mb-2"
                  style={{ height: "50px", objectFit: "contain" }}
                />
                <Card.Text className="fw-semibold">{tech.name}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
