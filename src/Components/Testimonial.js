// src/Components/TestimonialSection.js
import React from "react";
import { Container, Carousel } from "react-bootstrap";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechCorp",
      feedback:
        "Amazing work! Our website traffic increased dramatically after their redesign. Highly professional and responsive team.",
      img: "https://via.placeholder.com/80", // Replace with client photo
    },
    {
      name: "Anita Sharma",
      role: "Founder, EcomMart",
      feedback:
        "Their AI-based web app solution helped automate our operations efficiently. Excellent support and communication!",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Vikram Singh",
      role: "Manager, StartUp Solutions",
      feedback:
        "Professional team, delivered the project on time. SEO and performance improvements really boosted our website ranking.",
      img: "https://via.placeholder.com/80",
    },
  ];

  return (
    <section className="py-5 bg-light" id="testimonials">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
          <p className="text-muted">
            Testimonials from our satisfied clients who trusted our services.
          </p>
        </div>

        <Carousel indicators={false} interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center text-center px-3">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p className="fst-italic text-muted">{`"${testimonial.feedback}"`}</p>
                <h5 className="fw-bold mt-2">{testimonial.name}</h5>
                <p className="text-primary mb-0">{testimonial.role}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
