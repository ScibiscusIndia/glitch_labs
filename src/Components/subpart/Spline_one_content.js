import { Container, Row, Col, Button } from "react-bootstrap";
import ScrollFloat from '../reactbit_ui/scroll_down_text/Scroll_down_txt';
import GradientText from '../reactbit_ui/gradtint';

// Overlay.jsx
export default function Spline_1_con() {
    return (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
   

      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
      Welcome to WEB 3.0
      </ScrollFloat>

        </h1>
        <p className="mt-4 text-lg md:text-xl text-black-200 max-w-2xl">
        Experience the future of the internet — decentralized, secure, and powered by blockchain. Step into a world of limitless innovation where technology meets freedom.
        </p>
        <Button variant="outline-primary" size="lg" className="me-3"  style={{ backgroundColor: "white", color: "#0d6efd", borderColor: "#0d6efd" }}>
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            >
            Get Started
          </GradientText>
        </Button>
      </div>
    );
  }
  