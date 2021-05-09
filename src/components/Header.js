import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import arrows from "../images/arrows.svg";
import { Link } from "gatsby";

const Header = () => {
  return (
    <NavHeader>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brand logo" />
          </Link>
        </div>
        <div className="arrows">
          <img src={arrows} alt="scroll down icon" />
        </div>
      </div>
    </NavHeader>
  );
};

const NavHeader = styled.section`
  .header-container {
    background-color: var(--brand-color);
    width: 100%;
    align-content: center;
  }
  .logo {
    margin: auto;
    display: block;
    width: fit-content;
    padding: 30px 0;
  }
  .arrows {
    display: none;
  }
  @media (max-width: 768px) {
    .header-container {
      height: 100vh;
    }
    .logo {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 88%;
    }
    .arrows {
      height: 12%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
`;

export default Header;
