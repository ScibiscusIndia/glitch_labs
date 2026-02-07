// src/Components/ProjectCardAcepodium.js
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import desktopImg from "./ProjAssest/pod1.png";

export default function ProjectCardAcepodium() {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="shadow-sm border-0" style={{ maxWidth: "600px" }}>

      {/* Image Wrapper */}
      <div style={{ position: "relative" }}>
        <Card.Img
          src={desktopImg}
          alt="Acepodium Preview"
          style={{
            height: "300px",
            objectFit: "cover",
          }}
        />

        {/* Favorite Icon */}
        <div
          onClick={() => setLiked(!liked)}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            cursor: "pointer",
            background: "white",
            borderRadius: "50%",
            padding: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <HeartFill
            size={20}
            color={liked ? "red" : "#bbb"}
          />
        </div>
      </div>

      {/* Content */}
      <Card.Body className="text-center px-4 pb-4">
        <h4 className="fw-bold mb-2">Acepodium</h4>
        <p className="text-muted mb-3">
          An AI-powered app that predicts winning horses using advanced data analysis and performance insights.
        </p>

        <Button
          href="https://acepodium.com"
          target="_blank"
          variant="primary"
        >
          Demo
        </Button>
      </Card.Body>
    </Card>
  );
}
