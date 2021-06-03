import React from "react";
import Layout from "../components/Layout";
import { PageHeading } from "../components/styles/Styles";
import styled from "styled-components";
import { graphql } from "gatsby";

export const query = graphql`
  {
    strapiAboutMe {
      Title
      text
    }
  }
`;

const AboutMe = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <About>
        <PageHeading>{data.strapiAboutMe.Title}</PageHeading>
        <p>{data.strapiAboutMe.text}</p>
      </About>
    </Layout>
  );
};

const About = styled.section`
  margin: 3rem;
  p {
    width: 65vw;
    margin: auto;
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    p {
      width: 80vw;
    }
  }

  @media screen and (max-width: 501px) {
    margin: 0px;
    margin-top: 3rem;
    padding: 1rem;

    p {
      width: 95vw;
      margin: auto;
    }
  }
`;

export default AboutMe;
