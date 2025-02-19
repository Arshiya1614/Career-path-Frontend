import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

// Styled Navbar with Glassmorphism Effect
const StyledNavbar = styled(Navbar)`
  width: 100%;  /* Ensure full width */
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  backdrop-filter: blur(10px);
`;

const MyNavbar = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        {/* Move the Brand to the Start */}
        <Navbar.Brand as={Link} to="/" style={{ color: "linear-gradient(135deg, #667eea, #764ba2)", fontWeight: "bold" }}>
          Career Guidance App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align Links to the End */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="me-3" style={{ color: "#fff" }}>
              Start Here
            </Nav.Link>

            {/* Roadmap Dropdown */}
            <NavDropdown title="Roadmap" id="roadmap-dropdown" className="me-3">
              <NavDropdown.Item as={Link} to="/roadmap/skill-based">Skill-Based</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/roadmap/role-based">Role-Based</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/signin" className="me-3" style={{ color: "#fff" }}>
              Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="me-3" style={{ color: "#fff" }}>
              Register
            </Nav.Link>

            {/* Menu Dropdown with Icon */}
            <NavDropdown
              title={<FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} />}
              id="menu-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/bookmarked-roadmaps">Bookmarked Roadmaps</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/best-practices">Best Practices</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/questions">Questions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/project-ideas">Project Ideas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guides">Guides</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default MyNavbar;
