import { type } from "@testing-library/user-event/dist/type";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  justify-content: center;
  align-items: center;

  display: flex-start;
`;

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.8vh",
  padding: "2vh",
};

const liStyle = { display: "flex" };

function Navbar() {
  return (
    <Nav>
      <a href="#about" style={linkStyle}>
        About
      </a>

      <a href="#projects" style={linkStyle}>
        Projects
      </a>

      <a href="#contact" style={linkStyle}>
        Contact
      </a>
    </Nav>
  );
}

export default Navbar;
