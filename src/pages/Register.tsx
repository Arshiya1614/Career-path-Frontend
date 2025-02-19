import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0.3, 0.3, 0.3, 0.3);
  padding: 40px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 26px;
  color: #000000;
  margin-bottom: 20px;
`;

const StyledInput = styled(Form.Control)`
  border: 1px solid #ccc !important;
  border-radius: 10px !important;
  padding: 12px 15px;
  font-size: 14px;
  outline: none;
  color: #000;

  &::placeholder {
    color: #666;
  }
`;

const StyledSelect = styled(Form.Select)`
  border: 1px solid #ccc !important;
  border-radius: 10px !important;
  padding: 12px 15px;
  font-size: 14px;
  outline: none;
  color: #000;
`;

const Register: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
          <Button className="w-100 mt-3" variant="primary" style={{ borderRadius: "25px", padding: "12px" }}>
            Register
          </Button>
          <p className="mt-3 text-dark" style={{ cursor: "pointer" }} onClick={() => navigate("/signin")}>
            Already have an account? <span style={{ textDecoration: "underline" }}>Login</span>
          </p>
        </Container>
      </CardContainer>
    </Wrapper>
  );
};

export default Register;
