// src/Components/PortfolioSection.js
import React from "react";
import p1 from "./assest/p1.png"
import p2 from "./assest/p2.png"
import p3 from "./assest/p3.png"
import p4 from "./assest/p4.png"
import p7 from "./assest/p7.png"
import p6 from "./assest/p6.png"
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Restrorant/Bar Website",
      img: p1, // replace with your project screenshot
      desc: "A modern and responsive website for restorants, Bar & Restrobar.",
      link: "https://scibiscusindia.github.io/The_wood_house_2/",
    },
    {
      title: "Portfolio Site",
      img: p3,
      desc: "Full-fledge site for showcasing your creative work through portfolios.",
      link: "https://scibiscusindia.github.io/eportfolio_one/",
    },
    {
      title: "Company Website",
      img: p2,
      desc: "Corporate website with professional design, SEO optimized and responsive.",
      link: "https://scibiscusindia.github.io/Scibiscus_main_site/",
    },
    {
      title: "School/University Sites",
      img: p4,
      desc: "Websites for schools implementing automation and smart analytics.",
      link: "https://scibiscusindia.github.io/school_temp_3/",
    },
    {
      title: "Real State Sites",
      img: p7,
      desc: "Interactive websites for management and online presence of your business.",
      link: "https://tranquil-speculoos-750703.netlify.app/",
    },
    {
      title: "Dashboards/CMS",
      img: p6,
      desc: "Website with control managment system and analytics integration.",
      link: "https://getbootstrap.com/docs/5.3/examples/dashboard/#",
    },
  ];

  return (
    <section className="py-5 bg-white" id="portfolio">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Portfolio</h2>
          <p className="text-muted">
            Some of the projects we have built for our clients. Click to view more details.
          </p>
        </div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0 portfolio-card">
                <Card.Img
                  variant="top"
                  src={project.img}
                  alt={project.title}
                  className="portfolio-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.desc}</Card.Text>
                  <Button
                    href={project.link}
                    variant="primary"
                    className="mt-auto"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
