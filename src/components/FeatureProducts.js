import React from "react";
import { SubTitle } from "../components/styles/Styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ImageLayout } from "../components/styles/GridLayout";

// featured products on home page

const query = graphql`
  {
    allStrapiNewArrivals {
      nodes {
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                height: 400
                width: 400
              )
            }
          }
        }
      }
    }
  }
`;

const FeatureProducts = () => {
  const data = useStaticQuery(query);
  const nodes = data.allStrapiNewArrivals.nodes;
  return (
    <div>
      <SubTitle>New Arrivals</SubTitle>
      <ImageLayout>
        <div>
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
        </div>
      </ImageLayout>
    </div>
  );
};

export default FeatureProducts;
