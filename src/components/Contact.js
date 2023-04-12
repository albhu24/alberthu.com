import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { FaLinkedin, FaInstagram, FaGithub, FaGoogle } from "react-icons/fa";
import { CiMail, CiLinkedin, CiInstagram } from "react-icons/ci";
import { VscGithubInverted, VscGithubAlt } from "react-icons/vsc";

const Section = styled.div`
  min-height: 100vh;

  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const ContactMe = styled.button`
  font-family: Arial, sans-serif;
  font-size: 9px;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;

  cursor: pointer;
  outline: none;
  transition: background-color 0.5s;
  :hover {
    background: #0056b3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: inherit;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;

function Contact() {
  return (
    <Section id="contact">
      <h1>Get in Touch</h1>
      <h6>I'm currently looking for new opportunities!</h6>

      <SocialLinks>
        <SocialLink
          href="mailto:albhu24@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CiMail />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/albert-h-55b16188/"
          target="_blank"
          rel="noreferrer"
        >
          <CiLinkedin />
        </SocialLink>

        <SocialLink
          href="https://github.com/albhu24"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubAlt />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/hus.cookin/"
          target="_blank"
          rel="noreferrer"
        >
          <CiInstagram />
        </SocialLink>
      </SocialLinks>
    </Section>
  );
}

export default Contact;
