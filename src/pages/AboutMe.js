import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Layout>
      <About>
        <h1>About Me</h1>
      </About>
    </Layout>
  );
};

const About = styled.section`
  margin: 3rem;
`;

export default AboutMe;
