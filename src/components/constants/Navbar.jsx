import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../css/style.css";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";
import { useNavigate } from 'react-router-dom'

function Navbar1(props) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props);
  }, [props])

  const handleLogout = () => {
    props.logoutUser();
    navigate('/login');
  }

  return (
    <>
      <Navbar className="nav-fix" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand id="nav-brand" href="/">
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
            {!props.authStatus.success?
            <Nav>
              <Nav.Link  href="/login">Log in</Nav.Link>
              <Nav.Link eventKey={2} href="/signup">
                Sign up
              </Nav.Link>
            </Nav>: 
            <Nav>
              <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
            </Nav>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authStatus : state.authR
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar1)
