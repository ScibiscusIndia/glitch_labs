import { Container, Row, Col, Image } from "react-bootstrap";

export default function Section2() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <div className="d-flex align-items-center mb-3">
            {/* Profile images */}
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              roundedCircle
              width={50}
              height={50}
              className="me-2"
            />
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              roundedCircle
              width={50}
              height={50}
              className="me-2"
            />
            <Image
              src="https://randomuser.me/api/portraits/women/50.jpg"
              roundedCircle
              width={50}
              height={50}
              className="me-2"
            />
            <Image
              src="https://randomuser.me/api/portraits/men/36.jpg"
              roundedCircle
              width={50}
              height={50}
              className="me-2"
            />
            <span className="badge bg-danger rounded-pill fs-6">2k+</span>
          </div>

          <h2 className="fw-bold">About Us</h2>
        </Col>

        {/* Right Section */}
        <Col md={6}>
          <p className="text-muted fs-5">
          We are a creative web solutions company dedicated to helping businesses build their digital presence. 
          From startups to enterprises, we design and develop websites that are modern, responsive, and results-driven.
          </p>
        </Col>
      </Row>

      {/* Features Row */}
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <h5 className="fw-bold">Our Mission</h5>
          <p className="text-muted">
          We believe every brand deserves a strong online identity. Our mission is to craft websites that not only look
          great but also deliver seamless user experiences and measurable business growth.
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h5 className="fw-bold">What We Do</h5>
          <p className="text-muted">
          We specialize in custom web development, UI/UX design, e-commerce solutions, and digital branding. 
          By combining cutting-edge technology with creative strategies, we help businesses turn their vision into reality.
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h5 className="fw-bold">Why Choose Us</h5>
          <p className="text-muted">
          When you work with us, you’re not just getting a website—you’re getting a dedicated partner. 
          We provide ongoing support, transparent communication, and scalable solutions to ensure your digital 
          journey is smooth and successful.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
