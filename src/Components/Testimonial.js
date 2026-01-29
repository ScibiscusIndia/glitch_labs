// src/Components/TestimonialSection.js
import { Container, Carousel, Row, Col } from "react-bootstrap";



/* Main Section */
export default function TestimonialSection() {
  return (
    <div className="py-5 bg-white">
      <Container>
        <Row className="align-items-center">

          {/* Left Content */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <p className="text-uppercase text-muted mb-2">
              Testimonials
            </p>

            <h2 className="fw-bold mb-3">
              What Our Clients Say
            </h2>

            <p className="text-muted">
              We are committed to providing reliable, transparent, and effective
              legal services. Here’s what our clients say about their experience
              with our law firm.
            </p>
          </Col>

          {/* Right Slider */}
          <Col lg={8}>
            <SliderTestimonial/>
          </Col>

        </Row>
      </Container>
    </div>
  );
}





// slider function
function SliderTestimonial() {
  const testimonials = [
    {
      name: "Ronit",
      role: "CEO, The Wood House",
      feedback: "Amazing work! Our restro bar traffic increased dramatically after their redesign. The team was highly professional, responsive, and attentive to our requirements, delivering results that exceeded our expectations.",
    },
    {
      name: "Abhishek Kapse",
      role: "Founder, AK automexa",
      feedback:"Their team designed and developed our website efficiently and delivered it on time. Throughout the process, they provided excellent support and maintained clear, consistent communication, making the entire experience seamless and hassle-free.",
    },
   
  ];

  return (
    <section className="py-5 bg-light" id="testimonials">
      <Container>
       

        <Carousel indicators={false} interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center text-center px-3">
                {/* <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                /> */}
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
