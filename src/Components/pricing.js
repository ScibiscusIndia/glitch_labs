// src/Components/PricingSection.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "₹9,999",
      features: [
        "Single Page Website",
        "Responsive Design",
        "Basic SEO Setup",
        "1 Month Free Support",
      ],
      button: "Get Started",
    },
    {
      name: "Standard",
      price: "₹24,999",
      features: [
        "Multi Page Website (up to 5 Pages)",
        "Responsive + Modern UI",
        "SEO Optimization",
        "Free Domain & Hosting (1 Year)",
        "3 Months Free Support",
      ],
      button: "Choose Plan",
      highlight: true, // Highlight this plan
    },
    {
      name: "Premium",
      price: "₹49,999",
      features: [
        "Dynamic Website / Web App",
        "E-commerce or Portfolio",
        "Full SEO + Analytics",
        "Custom Features & CMS",
        "6 Months Free Support",
      ],
      button: "Go Premium",
    },
  ];

  return (
    <section className="py-5 bg-light" id="pricing"  style={{ scrollMarginTop: "70px" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: 400,
            marginRight: "0.5rem",
          }}>Our Pricing Plans</h2>
          <p className="text-muted">
            Affordable rates for websites and web apps in India. Choose the plan that fits your needs.
          </p>
        </div>
        <Row className="g-4">
          {plans.map((plan, index) => (
            <Col md={4} key={index}>
              <Card
                className={`h-100 shadow-sm border-0 ${
                  plan.highlight ? "pricing-highlight" : ""
                }`}
              >
                <Card.Body className="d-flex flex-column text-center">
                  <h5 className="fw-bold mb-3">{plan.name}</h5>
                  <h3 className="fw-bold text-primary">{plan.price}</h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? "primary" : "outline-primary"}
                    className="mt-auto"
                  >
                    {plan.button}
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
