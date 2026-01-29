import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import portfolioData from "./ProjData";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSectionExt() {
  const [activeTab, setActiveTab] = useState("latest");

  const filteredProjects = portfolioData
    .filter((project) => project.category === activeTab)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="py-5 bg-white" id="portfolio">
      <Container>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Our Portfolio</h2>
          <p className="text-muted">
            Explore our latest builds and personal portfolio projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-4 mb-5 portfolio-tabs">
          <span
            className={`portfolio-tab ${
              activeTab === "latest" ? "active" : ""
            }`}
            onClick={() => setActiveTab("latest")}
          >
            Latest Builds
          </span>

          <span
            className={`portfolio-tab ${
              activeTab === "personal" ? "active" : ""
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Portfolios
          </span>
           <span
            className={`portfolio-tab ${
              activeTab === "Corporate" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Corporate")}
          >
            Corporate
          </span>
           <span
            className={`portfolio-tab ${
              activeTab === "Dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Dashboard")}
          >
            Dashboard
          </span>
        </div>

        {/* Animated Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Row className="g-4">
              {filteredProjects.map((project, index) => (
                <Col md={6} lg={4} key={index}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img
                      variant="top"
                      src={project.img}
                      alt={project.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <Card.Body className="d-flex flex-column">
                      <small className="text-muted mb-1">
                        📅 {project.date}
                      </small>

                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text className="text-muted">
                        {project.desc}
                      </Card.Text>

                      <Button
                        href={project.link}
                        target="_blank"
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
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
