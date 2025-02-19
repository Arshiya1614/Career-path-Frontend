import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0.3, 0.3, 0.3, 0.3);
  width: 400px;
  padding: 40px;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  color: #000000;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #007bff;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-size: 12px;
  color: #000;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  border-radius: 25px;
  border: none;
  background: #007bff;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const DividerText = styled.p`
  color: #000;
  font-size: 14px;
  margin: 20px 0 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #000;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>Sign In</Title>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <ForgotPassword href="#">Forgot Password?</ForgotPassword>
      <Button>Sign In</Button>
      <DividerText>Or Sign up using</DividerText>
      <SocialIcons>
        <SocialButton>
          <FaFacebookF />
        </SocialButton>
        <SocialButton>
          <FaGoogle />
        </SocialButton>
        <SocialButton>
          <FaLinkedinIn />
        </SocialButton>
      </SocialIcons>
    </Container>
  );
};

export default SignIn;
