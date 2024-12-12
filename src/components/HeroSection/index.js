import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SocialLinks,
} from "./HeroStyle";
import HeroImg from "../../images/Ravindu-Wickramage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
            <SocialLinks>
              <a href={Bio.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={Bio.insta} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={Bio.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </SocialLinks>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
