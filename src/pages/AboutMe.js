import React from "react";
import Layout from "../components/Layout";
import { PageHeading } from "../components/styles/Styles";
import styled from "styled-components";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

export const query = graphql`
  {
    strapiAboutMe {
      Title
      info_text
    }
  }
`;

const AboutMe = ({ data }) => {
  return (
    <Layout>
      <About>
        <PageHeading>{data.strapiAboutMe.Title}</PageHeading>
        <div className="text">
          <ReactMarkdown children={data.strapiAboutMe.info_text} />
        </div>
      </About>
    </Layout>
  );
};

const About = styled.section`
  margin: 3rem;
  .text {
    width: 65vw;
    margin: auto;
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    .text {
      width: 80vw;
    }
  }

  @media screen and (max-width: 501px) {
    margin: 0px;
    margin-top: 3rem;
    padding: 1rem;

    .text {
      width: 95vw;
      margin: auto;
    }
  }
`;

export default AboutMe;
