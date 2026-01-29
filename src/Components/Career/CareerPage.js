import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InternshipDetails from "./ProgmIntroSec";

const InternshipCard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="shadow-sm mt-4 ms-4" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <Card.Title className="fw-bold">
            Internship Opportunity
          </Card.Title>

          <Card.Text className="text-muted mb-2">
            2 months of intensive internship designed to enhance practical skills.
          </Card.Text>

          <div className="mb-2">
            <small className="text-secondary">
              📅 Posted on: 10 Jan 2026
            </small>
          </div>

          <div className="mb-2">
            <small className="text-secondary">
              📍 Location: Remote Internship
            </small>
          </div>

          <div className="mb-3">
            <small className="text-secondary">
              💰 Registration Fees: <strong>Rs 500/-</strong>
            </small>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setShow(true)}
          >
            Apply Now
          </Button>
        </Card.Body>
      </Card>

      {/* 🔥 Popup Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Internship Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Calling your component here */}
          <InternshipDetails />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InternshipCard;
