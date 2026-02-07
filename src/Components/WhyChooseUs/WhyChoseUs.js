// src/Components/WhyChooseUs.js
import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CheckCircle, Award, ShieldLock, Lightning } from "react-bootstrap-icons";
import "./WhyChooseUs.css"; // 👈 Add a CSS file for animation styles

export default function WhyChooseUs() {
  const cardsRef = useRef([]);

  const features = [
    {
      icon: <CheckCircle size={40} className="text-primary" />,
      title: "Trusted by Clients",
      desc: "We deliver consistent results with 100% client satisfaction and long-term relationships."
    },
    {
      icon: <Award size={40} className="text-success" />,
      title: "Quality Service",
      desc: "Our team ensures top-notch quality with modern practices and cutting-edge technologies."
    },
    {
      icon: <ShieldLock size={40} className="text-warning" />,
      title: "Secure & Reliable",
      desc: "We prioritize data security and system reliability for worry-free business operations."
    },
    {
      icon: <Lightning size={40} className="text-danger" />,
      title: "Fast Delivery",
      desc: "Our agile process ensures on-time delivery without compromising quality."
    }
  ];

  // 👇 Animation logic
  useEffect(() => {
    const cards = cardsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: 400,
            marginRight: "0.5rem",
          }}>Why Choose Us</h2>
          <p className="text-muted">
            We stand out because of our commitment, quality, and results.
          </p>
        </div>

        <Row className="g-4">
          {features.map((item, index) => (
            <Col xs={6} md={6} lg={3} key={index}>
              <Card
                ref={(el) => (cardsRef.current[index] = el)}
                className="why-card h-100 shadow-sm border-0 text-center p-4 hover-effect d-flex flex-column align-items-center justify-content-start"
              >
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  {item.icon}
                </div>
                <Card.Title className="fw-semibold">{item.title}</Card.Title>
                <Card.Text className="text-muted d-none d-md-block">
                  {item.desc}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
