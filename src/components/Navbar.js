import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "../components/NavbarLinks";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <NavItems>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}{" "}
    </NavItems>
  );
};

const NavItems = styled.nav`
  max-width: 1170px;
  margin: auto;
  ul {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    width: 65vw;
    li {
      padding: 2rem 0px;
      font-size: 1.4rem;
      list-style: none;
      a {
        color: var(--text-color);
        &:link {
          text-decoration: none;
        }
        &:hover {
          text-decoration: underline;
        }
        &:active {
          text-decoration: underline;
        }
        &:visited {
          text-decoration: none;
        }
      }
    }
  }
  @media (max-width: 768px) {
    height: 0px;
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

// ======

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 1em 0.5em;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    padding-top: 10vh;
    background-color: #fff;
    font-size: 5vh;
    z-index: 0;
    top: 0;
    transition: all 0.3s ease-in;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  display: block;
  position: absolute;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};
  z-index: 2;
  top: 0;
  margin-top: 1.2rem;

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

export default Navbar;
