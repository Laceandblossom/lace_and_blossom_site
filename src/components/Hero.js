import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    strapiHeroImage {
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              aspectRatio: 3
            )
          }
        }
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  console.log(data);
  const image = data.strapiHeroImage.image;
  console.log(image);
  return (
    <HeroImage>
      <div className="hero">
        <GatsbyImage
          image={getImage(image.localFile)}
          // aspectRatio={3 / 1}
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
