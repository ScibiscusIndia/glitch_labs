import React from "react";
import LiqEthSection from "./reactbit_ui/LiquidEther/LiqComp";
import { Button, Container } from "react-bootstrap";

const Landing2 = () => {
  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        height: "50dvh", // uses dynamic viewport height for mobile browsers
      }}
    >
      {/* 3D Interactive Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
        }}
      >
        <LiqEthSection />
      </div>

      {/* Overlay Content */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center px-3"
        style={{
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.75), rgba(255,255,255,0.55))",
          backdropFilter: "blur(3px)"
        }}
      >
        <Container
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: "850px",
            padding: "1rem",
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#000",
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              lineHeight: "1.2",
              marginBottom: "1rem",
            }}
          >
            Welcome to WEB 3.0
          </h1>

          <p
            className="mb-4"
            style={{
              color: "#222",
              fontSize: "clamp(0.9rem, 2.5vw, 1.25rem)",
              lineHeight: "1.6",
              margin: "0 auto",
              maxWidth: "90%",
            }}
          >
            Experience next-gen interactivity and design with LiqEth — where
            innovation meets art in motion. Built for performance, designed for
            beauty.
          </p>

          <Button
            variant="dark"
            size="lg"
            className="shadow"
            style={{
              borderRadius: "50px",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              padding: "0.75rem 2.5rem",
              pointerEvents: "auto",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Get Started
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Landing2;
