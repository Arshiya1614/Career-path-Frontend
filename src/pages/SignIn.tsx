import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Logo.svg";


const Container = styled.div`
  background: black;
  border-radius: 10px;
  border : 1px solid #99A7F1;
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
  color:#99A7F1;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background: black;
  border: 1px solid #99A7F1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  color: #99A7F1;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #99A7F1;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-size: 12px;
  color:white;
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
  background:#99A7F1;
  color: #ffffff;
  padding: 10px 25px;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background:none;
    border:1px solid #99A7F1;
  }
`;

const DividerText = styled.p`
  color: white;
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
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    border: 1px solid #99A7F1;
    color: #99A7F1;
  }
`;
const LogoImage = styled.img`
  width: 50px; /* Adjust size as needed */
  height: 50px;
  margin-bottom: 10px;
`;

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoImage src={Logo} alt="Logo" />
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
