// src/Components/IntroSection.js
import React from "react";
import intro_pic1 from "./assest/intro_pic1.png";

import GradientText from './reactbit_ui/gradtint';
import { Container, Row, Col, Button } from "react-bootstrap";

export default function IntroSection() {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Welcome to <span className="text-primary">Glitch_Labs</span>
            </h1>
            <p className="lead text-muted mt-3">
              We help businesses grow with modern web solutions, clean design,
              and cutting-edge technology. Let’s build something amazing
              together.
            </p>
            <div className="mt-4">
              {/* <Button variant="primary" size="lg" className="me-3">
                Get Started
              </Button> */}
              <Button variant="outline-dark" size="lg" className="me-3">
                 <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                      >
                  Contact us
                </GradientText>
              </Button>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src={intro_pic1} // Replace with company illustration/hero image
              alt="Company Intro"
              className="w-50"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
