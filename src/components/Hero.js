import React from "react";
import styled from "styled-components";
//import Navbar from "./components/Navbar";
import Navbar from "./Navbar";

import down from "./down.png";

const Section = styled.div`
  /* height: 100vh; */

  min-height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  align-items: center;

  /* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  #intro {
    font-size: 4rem;
    margin: 0;
    color: white;
  }
  #jobTitle {
    font-size: 1.5rem;
    margin: 0px;
    color: white;
  }
`;

const Learnmore = styled.div`
  position: absolute;
  bottom: 0;
`;
function Hero() {
  return (
    <Section>
      <h1 id="intro">Albert Hu</h1>
      <h6 id="jobTitle">Software Engineer</h6>
    </Section>
  );
}

export default Hero;
