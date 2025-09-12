// src/Components/Navbar.js
import logo from "./assest/logo4.png"
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";


export default function AppNavbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="shadow-sm" sticky="top">
      <Container fluid>
        {/* Left - Logo */}
        <BsNavbar.Brand href="#">
          <img
            src={logo}// replace with your logo
            alt="Logo"
            className="d-inline-block align-top"
            style={{
              height: "40px",
              width: "auto",
              backgroundSize: "cover"
            }} // custom width
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
            <Nav.Link as={NavLink} to="/"  className="mx-lg-2">Home</Nav.Link>
            <Nav.Link href="https://scibiscusindia.github.io/Edge-main-site-Blog-Area/"  target="_blank"  className="mx-lg-2">Blog</Nav.Link>
            <Nav.Link href="#pricing" className="mx-lg-2">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs"  className="mx-lg-2">About Us</Nav.Link>
          </Nav>

          {/* Desktop right - Icons */}
          <div className="d-none d-lg-flex align-items-center">
            <Nav.Link href="#notifications" className="me-3 p-0">
              <Bell size={20} />
            </Nav.Link>
            <Nav.Link href="#search" className="p-0">
              <Search size={20} />
            </Nav.Link>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>




  );
}
