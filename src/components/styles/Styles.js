import styled from "styled-components";

export const PageHeading = styled.h1`
  font-family: var(--styled-font);
  font-size: 20vw;
  color: var(--text-color);
  padding-left: 1vw;
  width: 100vw;
  margin-bottom: 1rem;
  /* line-height: 70%; */
  @media (max-width: 501px) {
    padding-left: 0px;
  }
`;

export const SubTitle = styled.h3`
  font-family: var(--styled-font);
  font-size: 4rem;
  width: fit-content;
  margin: auto;
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
`;
