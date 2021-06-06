import styled from "styled-components";

export const PageHeading = styled.h1`
  font-family: var(--styled-font);
  font-size: 17vw;
  color: var(--text-color);
  width: 90vw;
  margin: 3rem auto;
  max-width: 1170px;
  text-align: center;
  line-height: 14vw;
  height: 10vw;

  @media (max-width: 768px) {
    margin: 3rem auto 2rem auto;
  }
`;

export const SubTitle = styled.h3`
  font-family: var(--styled-font);
  font-size: 4rem;
  width: fit-content;
  margin: 2rem auto 1rem auto;
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
  @media (max-width: 501px) {
    text-align: center;
  }
`;
