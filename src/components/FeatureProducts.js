import React from "react";
import { SubTitle } from "../components/styles/Styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ImageLayout } from "../components/styles/GridLayout";

// featured products on home page

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
    <div>
      <SubTitle>New Arrivals</SubTitle>
      <ImageLayout>
        <div>
          <div className="collection-cards">
            {nodes.map((image, index) => {
              const pathToImage = getImage(image);
              return (
                <GatsbyImage
                  image={pathToImage}
                  alt="hello"
                  key={index}
                  className="collection"
                />
              );
            })}
          </div>
        </div>
      </ImageLayout>
    </div>
  );
};

export default FeatureProducts;
