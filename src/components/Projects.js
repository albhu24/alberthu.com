import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #1f1f1f; */
  height: 100vh;
  scroll-snap-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-content: space-evenly;
  max-width: 1000px;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;

  height: 10rem;
  width: 10rem;
  align-items: center;
  font-size: 2rem;
`;
const Title = styled.div`
  font-size: 1.5rem;
`;
const Description = styled.div`
  font-size: 1.2rem;
`;

function Projects() {
  return (
    <Section id="projects">
      <Title>
        <h3>Projects</h3>
      </Title>
      <Description>Some projects that I've worked on:</Description>
      <ProjectGrid>
        <ProjectCard>Project 1</ProjectCard>
        <ProjectCard>Project 2</ProjectCard>
        <ProjectCard>Project 3</ProjectCard>
        <ProjectCard>Project 4</ProjectCard>
      </ProjectGrid>
    </Section>
  );
}

export default Projects;
