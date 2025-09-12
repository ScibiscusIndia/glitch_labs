// src/Components/FooterSection.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./assest/logo6.png"
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";

export default function FooterSection() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          {/* Branding */}
          <Col md={4}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo} // Replace with your logo
                alt="Company Logo"
                className="me-2"
                style={{
                  height: "40px",
                  width: "auto",
                  backgroundSize: "cover"
                }} // custom width
              />
              {/* <h5 className="fw-bold mb-0">YourCompany</h5> */}
            </div>
            <p>
              Building modern websites, web apps, and AI-powered solutions for businesses worldwide.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#portfolio" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="#pricing" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#testimonials" className="text-light text-decoration-none">Testimonials</a></li>
            </ul>
          </Col>

          {/* Contact Info & Social */}
          <Col md={4}>
            <h6 className="fw-bold mb-3">Contact & Follow Us</h6>
            <p>Email: rajroshansharma5@gmail.com</p>
            <p>Phone: +91 9153316977</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#!" className="text-light fs-4"><Facebook /></a>
              <a href="#!" className="text-light fs-4"><Twitter /></a>
              <a href="#!" className="text-light fs-4"><Instagram /></a>
              <a href="#!" className="text-light fs-4"><Linkedin /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Glitch_Labs. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
