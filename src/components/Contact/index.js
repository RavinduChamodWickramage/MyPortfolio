import React from "react";
import styled from "styled-components";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper id="contact">
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactLink href="mailto:ravinduchamod1@gmail.com">
              ravinduchamod1@gmail.com
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactLink href="tel:+94714811327">+94 71 481 1327</ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <span>432/7/B, Watarawuma Rd, Naduna, Ganemulla, Sri Lanka</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaGithub />
            </ContactIcon>
            <ContactLink
              href="https://github.com/RavinduChamodWickramage"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/RavinduChamodWickramage
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaLinkedin />
            </ContactIcon>
            <ContactLink
              href="https://linkedin.com/in/ravindu-chamod-wickramage"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ravindu-chamod-wickramage
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaFacebook />
            </ContactIcon>
            <ContactLink
              href="https://facebook.com/ravindu.chamod.wickramage"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/ravindu.chamod.wickramage
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <FaInstagram />
            </ContactIcon>
            <ContactLink
              href="https://instagram.com/official_mr_wicky"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/official_mr_wicky
            </ContactLink>
          </ContactItem>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
