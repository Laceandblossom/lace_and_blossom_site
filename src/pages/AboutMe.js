import React from "react";
import Layout from "../components/Layout";
import { PageHeading } from "../components/styles/Styles";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Layout>
      <About>
        <PageHeading>About Me</PageHeading>
        <p>
          I'm baby four loko street art master cleanse disrupt iPhone lo-fi echo
          park bushwick tbh pabst. Echo park scenester offal VHS. Air plant
          shabby chic irony gentrify hoodie echo park mustache tote bag freegan
          biodiesel subway tile vegan. Succulents activated charcoal crucifix
          hella. Meggings blog hashtag, ramps photo booth polaroid bushwick hell
          of normcore umami gastropub etsy. Tote bag selvage vape pour-over
          authentic man bun vaporware leggings chillwave kickstarter +1 artisan
          pok pok. Literally keytar mlkshk blog tumblr plaid. Heirloom tofu
          quinoa, tote bag food truck retro skateboard.
        </p>
        <p>
          Gluten-free put a bird on it jianbing direct trade man braid green
          juice vegan plaid. Food truck vape skateboard sustainable,
          lumbersexual offal humblebrag drinking vinegar organic. Humblebrag
          wolf venmo cold-pressed, craft beer farm-to-table health goth poutine
          hammock gentrify.
        </p>
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
