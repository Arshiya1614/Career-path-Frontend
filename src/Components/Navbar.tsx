import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";

const StyledNavbar = styled(Navbar)`
  width: 100%;
  background: black !important;
  backdrop-filter: blur(10px);
  border-bottom: 0.5px solid white;
`;

const FullWidthContainer = styled(Container)`
  width: 100% !important;
  max-width: 100% !important;
  padding: 0 20px;
`;

const DropdownMenuStyles = styled.div`
  .dropdown-menu {
    background: black !important;
    border: 1px solid white;
  }
  .dropdown-item {
    color: white !important;
  }
  .dropdown-item:hover {
    background: #222 !important;
    color: #ddd !important;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 10px;
`;



const MyNavbar: React.FC = () => {

  return (
    <StyledNavbar expand="lg">
      <FullWidthContainer>
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center", color: "#fff" }}>
          <LogoImage src={Logo} alt="Career Guidance Logo" />
        </Navbar.Brand>
        <DropdownMenuStyles>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavDropdown
                title={<FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} />}
                id="menu-dropdown"
              >
                <NavDropdown.Item as={Link} to="/bookmarked-roadmaps">Bookmarked Roadmaps</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bestPractice">Best Practices</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/questions">Questions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/projectIdeas">Project Ideas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/guides">Guides</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/" className="me-3" style={{ color: "#fff" }}>
                Start Here
              </Nav.Link>
              <NavDropdown title={<span style={{ color: "#fff" }}>Roadmap</span>} id="roadmap-dropdown" className="me-3">
                <NavDropdown.Item >
                  Role-Based Roadmaps
                </NavDropdown.Item>
                <NavDropdown.Item >
                  Skill-Based Roadmaps
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/signin" className="me-3" style={{ color: "#fff" }}>
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" className="me-3" style={{ color: "#fff" }}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </DropdownMenuStyles>
      </FullWidthContainer>
    </StyledNavbar>
  );
};

export default MyNavbar;
