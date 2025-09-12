// src/Components/ContactSection.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FormToSheet from "./contact2";

export default function ContactSection() {
  return (
    <section className="py-5 bg-white" id="contact">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">
            Get in touch with us for projects, queries or collaborations.
          </p>
        </div>

        {/* Equal height row */}
        <Row className="g-4 d-flex align-items-stretch">
          {/* Contact Form */}
          <Col md={7} className="d-flex">
            <Card className="w-100 border-0 bg-light rounded-3">
              <Card.Body>
                <FormToSheet />
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col md={5} className="d-flex">
            <Card className="w-100 border-0 bg-light rounded-3">
              <Card.Body>
                <h5 className="fw-bold mb-3">Contact Information</h5>
                <p>
                  <strong>Email:</strong> rajroshanshrma5@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 9153316977
                </p>
                <p>
                  <strong>Address:</strong> 123, MG Road, Bangalore, India
                </p>
                <p>
                  <strong>Working Hours:</strong> Mon - Sat, 10:00 AM - 6:00 PM
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
