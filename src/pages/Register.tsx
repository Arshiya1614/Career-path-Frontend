import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 242, 254, 0.5);
  width: 600px;
  padding: 40px;
  text-align: center;
  position: relative;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const StyledInput = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.2) !important;
  border: none !important;
  border-radius: 10px !important;
  padding: 12px 15px;
  color: white !important;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3) !important;
    outline: 2px solid #ffffff !important;
  }
`;

const StyledSelect = styled(Form.Select)`
  background: rgba(255, 255, 255, 0.2) !important;
  border: none !important;
  border-radius: 10px !important;
  padding: 12px 15px;
  color: white !important;
  font-size: 14px;
  outline: none;
  appearance: none;

  option {
    background: #764ba2;
    color: white;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3) !important;
    outline: 2px solid #ffffff !important;
  }
`;

const Register: React.FC = () => {
  const navigate = useNavigate(); 
  return (
    <Background>
      <CardContainer>
        <Title>Register</Title>
        <Container>
          <Row>
            <Col md={6} className="mb-3">
              <StyledInput type="text" placeholder="Full Name" />
            </Col>
            <Col md={6} className="mb-3">
              <StyledInput type="number" placeholder="Age" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <StyledInput type="email" placeholder="Email" />
            </Col>
            <Col md={6} className="mb-3">
              <StyledInput type="password" placeholder="Password" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <StyledInput type="text" placeholder="College Name" />
            </Col>
            <Col md={6} className="mb-3">
              <StyledSelect>
                <option value="" disabled selected>
                  Degree & Branch
                </option>
                <option>B.Tech - CSE</option>
                <option>B.Tech - ECE</option>
                <option>B.Tech - Mechanical</option>
                <option>B.Tech - Civil</option>
                <option>Diploma</option>
              </StyledSelect>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <StyledSelect>
                <option value="" disabled selected>
                  Year of Study
                </option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>Final Year</option>
              </StyledSelect>
            </Col>
            <Col md={6} className="mb-3">
              <StyledSelect>
                <option value="" disabled selected>
                  Career Interest
                </option>
                <option>IT & Software</option>
                <option>Core Engineering</option>
                <option>Govt Jobs</option>
                <option>Higher Studies</option>
              </StyledSelect>
            </Col>
          </Row>
          <Button className="w-100 mt-3" style={{ borderRadius: "25px", background: "linear-gradient(135deg, #4facfe, #00f2fe)", border: "none", padding: "12px" }}>
            Register
          </Button>
          <p className="mt-3 text-white" style={{ cursor: "pointer" }} onClick={() => navigate("/signin")}>
            Already have an account? <span style={{ textDecoration: "underline" }}>Login</span>
          </p>
        </Container>
      </CardContainer>
    </Background>
  );
};

export default Register;