import React from "react";
import styled from "styled-components";
//import Navbar from "./components/Navbar";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #1f1f1f; */
  justify-content: center;
  height: 100vh;
  font-family: "Open Sans", sans-serif;

  scroll-snap-align: center;
`;

const AboutMe = styled.div`
  text-align: center;
  padding: 8px;
`;
const Technologies = styled.div`
  text-align: center;
`;
const Bullet = styled.ul`
  text-align: center;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  display: flex; // Add this line
  flex-wrap: wrap; // Add this line
  justify-content: center; // Add this line
  padding: 0; // Remove default padding
`;
const ListItem = styled.li`
  flex-basis: 50%;
  text-align: center;
`;

function About() {
  return (
    <Section id="about">
      <AboutMe>
        <h5>
          Self taught software engineer who delights in discovering new insights
          every day and collaborating with fellow innovators to create products
          that have the potential to transform the world.
        </h5>
      </AboutMe>
      <Technologies>
        <h5>Here are some technologies that I work with:</h5>
      </Technologies>
      <Bullet>
        <ListItem>ReactJS</ListItem>
        <ListItem>Javascript</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Java</ListItem>
        <ListItem>Python</ListItem>
      </Bullet>
    </Section>
  );
}

export default About;
