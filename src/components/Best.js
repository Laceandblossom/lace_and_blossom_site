import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
  console.log(items);

  return (
    <BestOf>
      <div className="collection-cards">
        {items.map((item, index) => {
          return (
            <div className="collection">
              <GatsbyImage
                image={item.childImageSharp.gatsbyImageData}
                key={index}
                alt="box gifts"
              />
            </div>
          );
        })}
        {/* <GatsbyImage image={image_1} alt="box gifts" /> */}
      </div>
      ;
    </BestOf>
  );
};

const BestOf = styled.section`
  max-width: 1170px;
  margin: auto;
  text-align: center;

  .collection-cards {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    .collection {
      margin: auto;
      position: relative;
      cursor: pointer;
      margin: 0.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    .collection-cards {
      grid-template-columns: 1fr;
      .collection {
        margin-top: 1rem;
      }
    }
  }
`;
export default Best;
