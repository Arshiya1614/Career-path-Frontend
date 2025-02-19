import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";


// Styled Components
const Background = styled.div`
  position: absolute; /* Ensures it covers the full viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;


const Container = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 230, 250, 0.5);
  width: 400px;
  padding: 50px;
  text-align: center;
  position: relative;


  
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 20px;
`;



const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 10px;
  padding: 12px 15px;
  margin: 10px 0;
  width: 100%;
  color: white;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
    outline: 2px solid #ffffff;
  }
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;

const Button = styled.button`
  border-radius: 25px;
  border: none;
  background: linear-gradient(135deg, #4facfe, #00f2fe); /* Cyan-Blue Gradient */
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 50px;
  margin-top: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 242, 254, 0.5); /* Neon Glow Effect */

  &:hover {
    background: linear-gradient(135deg, #00f2fe, #4facfe);
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 242, 254, 0.7);
  }

  &:active {
    transform: scale(0.95);
  }
`;


const DividerText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 35px 0 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }
`;

const SignIn: React.FC = () => {
  return (
    <Background>
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
    </Background>
  );
};

export default SignIn;
