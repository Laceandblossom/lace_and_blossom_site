import React from "react";
import Layout from "../components/Layout";
import { PageHeading } from "../components/styles/Styles";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Layout>
      <About>
        <PageHeading>About Me</PageHeading>
      </About>
    </Layout>
  );
};

const About = styled.section`
  margin: 3rem;
`;

export default AboutMe;
