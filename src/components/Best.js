import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageLayout } from "./styles/GridLayout";

// component for Best Sellers

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "best-sellers" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            width: 400
            layout: CONSTRAINED
            height: 400
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

const Best = () => {
  const data = useStaticQuery(query);
  const items = data.allFile.nodes;

  return (
    <BestOf>
      <ImageLayout>
        <div className="collection-cards">
          {items.map((item, index) => {
            return (
              <div className="collection">
                <GatsbyImage
                  image={getImage(item.childImageSharp.gatsbyImageData)}
                  key={index}
                  alt="box gifts"
                />
              </div>
            );
          })}
        </div>
      </ImageLayout>
    </BestOf>
  );
};

const BestOf = styled.section`
  max-width: 1170px;
  margin: auto;
  text-align: center;
`;
export default Best;
