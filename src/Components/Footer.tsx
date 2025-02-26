import React from "react";
import styled from "styled-components";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"; // Import Icons
import Logo from "../assets/Logo.svg";

// Styled Components for Footer
const FooterContainer = styled.footer`
  background: black;
  color: white;
  padding: 2rem 1rem 0;
  border-top: 2px solid white;
  text-align: center;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  color: gray;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: gray;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: gray;
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 1rem 0 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: gray;
    text-decoration: none;
    font-size: 0.875rem;
  }

  a:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Logo Section */}
      <div>
        <LogoImage src={Logo} alt="Career Guidance Logo" />
        <FooterText>
          Providing high-quality solutions to enhance your digital presence.
        </FooterText>

        {/* Social Media Icons */}
        <SocialIcons>
          <IconLink href="https://twitter.com" target="_blank">
            <FaXTwitter />
          </IconLink>
          <IconLink href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com" target="_blank">
            <FaGithub />
          </IconLink>
        </SocialIcons>
      </div>

      {/* Bottom Section */}
      <BottomSection>
        <div>&copy; {new Date().getFullYear()} careerpath. All Rights Reserved.</div>
        <FooterLinks>
          <a href="/status">Status</a>
          <a href="/legal">Legal</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/privacy-choices">Your Privacy Choices</a>
        </FooterLinks>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
