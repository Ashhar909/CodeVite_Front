// import { Link } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Alert from "react-bootstrap/Alert";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar1() {
  return (
    <>
      <style type="text/css">
        {`
    .nav-fix{
      background-color: #e3f2fd;
      color: white;
      box-shadow: 1px 2px 1px grey;
    }
    `}
      </style>
      <Navbar className="nav-fix" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <b>CodeVita</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/careers">Careers</Nav.Link>
              <NavDropdown title="Courses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/powershot">
                  PowerShot Series
                </NavDropdown.Item>
                <NavDropdown.Item href="/voyage">Bon-Voyage</NavDropdown.Item>
                <NavDropdown.Item href="/explore">
                  Other Course
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/skill">Skill Brewery</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/skill">Skill Brewery</Nav.Link>
              <NavDropdown title="Help" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/term">
                  Terms and Conditions
                </NavDropdown.Item>
                <NavDropdown.Item href="/privacy">
                  Privacy Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/refund">
                  Refund Policy
                </NavDropdown.Item>
                <NavDropdown.Item href="/pricing">Pricing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/faqs">FAQs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Log in</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
