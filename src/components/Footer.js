import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import NavbarLinks from "../components/NavbarLinks";

const Footer = () => {
  return (
    <Wrapper>
      <img src={logo} alt="brand logo" className="logo" />
      <div className="nav-links">
        <NavbarLinks />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--brand-color);
  margin: 3rem auto 0rem auto;
  .logo {
    margin: auto;
    display: block;
    height: 10rem;
  }

  .nav-links {
    padding: 1rem 0 1rem 0;
    margin: auto;
    width: fit-content;
    text-transform: capitalize;
  }
  li {
    list-style: none;
    margin: 0.8rem auto;
    text-align: center;
    text-transform: uppercase;

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
`;

export default Footer;
