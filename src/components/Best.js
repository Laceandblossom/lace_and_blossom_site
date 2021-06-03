import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageLayout } from "./styles/GridLayout";

// component for Best Sellers

const query = graphql`
  {
    allStrapiBestSellers {
      nodes {
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 400
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
`;

const Best = () => {
  const data = useStaticQuery(query);
  const nodes = data.allStrapiBestSellers.nodes;

  return (
    <BestOf>
      <ImageLayout>
        <div className="collection-cards">
          {nodes.map((node) => {
            return node.images.map((image, index) => {
              const pathToImage = getImage(image.localFile);
              return (
                <GatsbyImage
                  image={pathToImage}
                  alt=""
                  key={index}
                  className="collection"
                />
              );
            });
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
