// src/Components/IntroSection.js
import { useState } from "react";
import intro_pic1 from "./assest/intro_pic1.png";
import GradientText from "./reactbit_ui/gradtint";
import { Container, Row, Col, Button, Modal, Nav } from "react-bootstrap";
import ContactPopup from "./Contact3";
import { NavLink } from "react-router-dom";
import './Shared.css';
export default function IntroSection() {
  // 🔹 Modal State
  const [showModal, setShowModal] = useState(false);

  // 🔹 Handlers
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text */}
            <Col md={6} className="text-center text-md-start">
              <h1
                className="fw-bold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >

                {/* <p className="text-muted"
                style={{
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}>
                  World-class, professional, and optimized websites—built with efficiency.
                </p> */}

                <span
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    marginRight: "0.5rem",
                  }}
                >
                  Welcome to
                </span>

                <span
                  className="text-primary"
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Glitch_Labs
                </span>
              </h1>

              <p className="lead text-muted mt-3">
                We help businesses grow with modern web solutions, clean design,
                and cutting-edge technology. Let’s build something amazing
                together.
              </p>

              <div className="mt-4 d-flex ">
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="me-3"
                  onClick={handleOpen}
                >
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                  >
                    Contact Us
                  </GradientText>
                </Button>
                <Nav.Link as={NavLink} to="/aboutUs" className="mx-lg-2 mt-2 fs-5 nav-underline">
                  About Us
                </Nav.Link>
              </div>
            </Col>

            {/* Right Side - Image */}
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src={intro_pic1}
                alt="Company Intro"
                className="w-50"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 🔹 Modal Popup */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Contact Glitch_Labs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ✅ Embed your custom form component here */}
          {/* Example: <ContactForm /> */}
          <ContactPopup />
        </Modal.Body>
      </Modal>
    </>
  );
}
