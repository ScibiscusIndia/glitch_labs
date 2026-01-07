// src/Components/ServicesSection.js
import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Laptop, Cart, Building, Cpu, Search, Gear } from "react-bootstrap-icons";
import "./ServicesSection.css"; // 👈 Import the CSS file

export default function ServicesSection() {
  const cardsRef = useRef([]);

  const services = [
    {
      icon: <Laptop size={40} className="text-primary" />,
      title: "Portfolio Websites",
      desc: "Showcase your skills or business with clean, professional portfolio websites."
    },
    {
      icon: <Cart size={40} className="text-success" />,
      title: "Ecommerce Sites",
      desc: "Fully functional online stores optimized for performance, sales, and UX."
    },
    {
      icon: <Building size={40} className="text-warning" />,
      title: "Company Websites",
      desc: "Corporate websites that represent your brand professionally and effectively."
    },
    {
      icon: <Cpu size={40} className="text-danger" />,
      title: "AI-based Apps",
      desc: "Intelligent applications powered by AI for automation and advanced analytics."
    },
    {
      icon: <Search size={40} className="text-info" />,
      title: "SEO Services",
      desc: "Improve your website visibility and ranking with advanced SEO strategies."
    },
    {
      icon: <Gear size={40} className="text-secondary" />,
      title: "Web Applications",
      desc: "Custom web apps tailored to your business processes and requirements."
    }
  ];

  // 👇 Animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 150); // staggered animation delay
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            We provide a wide range of services to help your business grow online.
          </p>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col xs={6} md={6} lg={4} key={index}>
              <Card
                ref={(el) => (cardsRef.current[index] = el)}
                className="service-card h-100 text-center p-4 shadow-sm border-0 hover-effect d-flex flex-column align-items-center justify-content-start"
              >
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  {service.icon}
                </div>
                <Card.Title className="fw-semibold">{service.title}</Card.Title>
                <Card.Text className="text-muted d-none d-md-block">
                  {service.desc}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
