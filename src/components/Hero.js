import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <HeroImage>
      <div className="hero">
        <StaticImage
          src="../images/craft.jpeg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
          aspectRatio={3 / 1}
          formats={["auto", "webp", "avif"]}
        />
      </div>
    </HeroImage>
  );
};

const HeroImage = styled.section`
  @media (max-width: 768px) {
    .hero {
      display: none;
    }
  }
`;

export default Hero;
