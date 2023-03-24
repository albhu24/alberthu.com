import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
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

function Contact() {
  return (
    <Section id="contact">
      <h1>Get in Touch</h1>
      <h6>I'm currently looking for new opportunities!</h6>
      <a href="mailto:albhu24@gmail.com">
        <ContactMe>Say Hello</ContactMe>
      </a>
    </Section>
  );
}

export default Contact;
