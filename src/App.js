import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";
import photo from "./components/blu.avif";
import Navbar from "./components/Navbar";
const Container = styled.div`
  min-height: 100vh;
  color: white;
  /* scroll-snap-type: y mandatory;
  scroll-behavior: smooth; */
  overflow-y: scroll;
  /* scroll-snap-type: y mandatory;
  scroll-behavior: smooth; // only applies to non touchpad,mousewheel, touchscreen etc */
  overflow-y: scroll; // controls how the content is displayed when it overflows the vertical boundaries of an element.

  background-image: url(${photo});
  background-repeat: no-repeat;
  background-size: auto;
  &::-webkit-scrollbar {
    // this hides the scrollbar in webkit based browsers such as chrome/safari/opera
    display: none;
  }
`;

const SnapContainer = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

function App() {
  return (
    <Container>
      <SnapContainer>
        <Hero />
      </SnapContainer>
      <SnapContainer>
        <About />
      </SnapContainer>
      <SnapContainer>
        <Projects />
      </SnapContainer>
      <SnapContainer>
        <Contact />
      </SnapContainer>
    </Container>
  );
}

export default App;
