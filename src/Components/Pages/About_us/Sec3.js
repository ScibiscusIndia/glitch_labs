
import GradientText from '../../reactbit_ui/gradtint';

export default function Section3() {
    return (
      <div
        style={{
          backgroundColor: "#000",     // Black background
          minHeight: "30vh",           // Adjustable height
          display: "flex",
          alignItems: "center",        // Vertical center
        }}
      >
        <h1
          style={{
            color: "#fff",             // White text
            fontSize: "3rem",          // Adjustable size
            fontWeight: "bold",
            textAlign: "left",         // Left aligned
            margin: "0 2rem",          // Small padding from left
            padding: "2rem"
          }}
        >
          {/* readitent text */}
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
            >
            About Us.
        </GradientText>

        </h1>
      </div>
    );
  }
  