import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { ImageLayout } from "../components/styles/GridLayout";

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
      ;
    </ImageLayout>
  );
};

export default Best;
