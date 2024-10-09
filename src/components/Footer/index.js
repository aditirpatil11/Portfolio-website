import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const ContactSection = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.footer_background}; // Optional background
`;

const ContactHeading = styled.p`
  color: ${({ theme }) => theme.primary}; // Purple heading
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; // Space between links
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary}; // Link text color
  &:hover {
    color: ${({ theme }) => theme.primary}; // Hover effect with purple color
  }
`;




function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        
        
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#publications">Publication</NavLink>
          <NavLink href="#certifications">Certifications</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#activities">Activites</NavLink>
        </Nav>
        {/* Separate Contact Section */}
        <ContactSection>
          <ContactHeading>Contact me:</ContactHeading>
          <ContactLinks>
            <ContactLink href="mailto:aditirpatil11@gmail.com">aditirpatil11@gmail.com</ContactLink>
            <ContactLink href="tel:+17043694543">+1 (704) 369-4543</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/aditi-patil-raman-452199248/" target="https://www.linkedin.com/in/aditi-patil-raman-452199248/" rel="noopener noreferrer">
              LinkedIn
            </ContactLink>
            <ContactLink href="https://github.com/aditirpatil11" target="https://github.com/aditirpatil11" rel="noopener noreferrer">
              GitHub
            </ContactLink>
          </ContactLinks>
        </ContactSection>
        <Copyright>
          &copy; 2024 Aditi Patil Raman. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;