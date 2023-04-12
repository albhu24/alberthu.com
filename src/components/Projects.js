import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  justify-content: space-evenly;
  max-width: 1000px;
  margin-top: 2rem;
  width: 100%;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const ProjectCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  height: 10rem;
  width: 100%;
  align-items: center;
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;
const Title = styled.div`
  font-size: 1.5rem;
`;
const Description = styled.div`
  font-size: 1.1rem;
`;

function Projects() {
  return (
    <Section id="projects">
      <ProjectContainer>
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
      </ProjectContainer>
    </Section>
  );
}

export default Projects;
