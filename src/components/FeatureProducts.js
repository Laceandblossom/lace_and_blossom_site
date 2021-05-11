import React from "react";
import styled from "styled-components";
import { SubTitle } from "../components/styles/Styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "new-arivals" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 400
            height: 400
          )
        }
      }
    }
  }
`;

const FeatureProducts = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <Products>
      <SubTitle>New Arrivals</SubTitle>
      <div className="product-images">
        {nodes.map((image, index) => {
          const pathToImage = getImage(image);
          return (
            <GatsbyImage
              image={pathToImage}
              alt="hello"
              key={index}
              className="product-image"
            />
          );
        })}
      </div>
    </Products>
  );
};

const Products = styled.section`
  text-align: center;
  margin: 3rem auto;
  max-width: 1170px;

  h2 {
    font-family: var(--styled-font);
    font-size: 4rem;
    margin-bottom: 0rem;
  }

  .product-images {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    .product-image {
      margin: 0.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      margin: 0rem;
    }
    .product-images {
      grid-template-columns: 1fr;
    }
  }
`;

export default FeatureProducts;
