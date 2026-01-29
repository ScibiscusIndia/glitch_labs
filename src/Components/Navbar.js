// src/Components/Navbar.js
import logo from "./assest/logo4.png";
import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="shadow-sm" sticky="top">
      <Container fluid>
        {/* Left - Logo */}
        <BsNavbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: "40px", width: "auto" }}
          />
        </BsNavbar.Brand>

        {/* Mobile right: icons + toggler */}
        <div className="d-flex align-items-center ms-auto d-lg-none">
          <Nav.Link href="#notifications" className="me-2 p-0">
            <Bell size={20} />
          </Nav.Link>
          <Nav.Link href="#search" className="me-2 p-0">
            <Search size={20} />
          </Nav.Link>
          <BsNavbar.Toggle aria-controls="main-nav" />
        </div>

        {/* Collapsible content */}
        <BsNavbar.Collapse id="main-nav">
          {/* Center - Menu */}
          <Nav className="mx-auto text-center my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/" className="mx-lg-2">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/privacypolicy" className="mx-lg-2">
              Privacy Policy
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-lg-2">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/CareerPage" className="mx-lg-2">
              Career
            </Nav.Link>

            {/* Mobile App Services Button */}
            <div className="d-lg-none mt-3">
              <Nav.Link as={NavLink} to="/AppServices" variant="primary" size="sm" >
                App Services
              </Nav.Link>
            </div>
          </Nav>

          {/* Desktop right - Button + Icon */}

          <div className="d-none d-lg-flex align-items-center">
            <Button
              variant="outline-primary"
              size="sm"
              className="me-3 app-services-btn"
              href="/AppServices"
            >
              App Services
            </Button>

            <Nav.Link href="#notifications" className="p-0">
              <Bell size={20} />
            </Nav.Link>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
