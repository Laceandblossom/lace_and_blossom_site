import React from "react";
import styled from "styled-components";
import gram from "../images/gram.svg";
import brandText from "../images/brand-text.svg";

const SocialShowcase = () => {
  return (
    <Social>
      <div className="info">
        <img
          src={brandText}
          alt="Lace and Blossom text"
          className="brand-text"
        />
        <div className="text">
          <h4>Contact and follow me on Instagram:</h4>
          <h4>
            <strong>@Laceandblossom</strong>
          </h4>
        </div>
      </div>
      <img src={gram} alt="Instagram logo" className="gram-logo" />
    </Social>
  );
};

const Social = styled.section`
  width: 100vw;
  display: grid;
  padding: 3rem 0rem;
  grid-template-columns: 3fr 1fr;
  /* height: 30rem; */
  .info {
    .brand-text {
      margin-top: 3rem;
      width: 70vw;
      padding-left: 1rem;
    }
    .text {
      /* position: relative; */
      width: 70vw;
      padding: 3rem 0rem 0rem 2rem;
      p,
      h4 {
        font-family: "Apple SD Gothic Neo";
        text-transform: uppercase;
        color: var(--text-color);
      }
    }
  }
  .gram-logo {
    /* position: absolute; */
    width: 25vw;
    right: 0px;
    max-height: 25rem;
  }
  @media (max-width: 768px) {
    padding: 1.5rem 0rem;

    .info {
      .brand-text {
        margin-top: 0.8rem;
      }
    }
    .info {
      .text {
        padding-top: 1rem;
        p,
        h4 {
          margin-top: 0.2rem;
          font-size: 1em;
        }
      }
    }
  }
`;

export default SocialShowcase;
