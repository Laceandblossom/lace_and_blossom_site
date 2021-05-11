import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    boxes: file(relativePath: { eq: "collections/boxes.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 400
          width: 400
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }

    seasonal: file(relativePath: { eq: "collections/seasonal.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 400
          width: 400
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
  }
`;

const ProductCollections = () => {
  const data = useStaticQuery(query);
  const image_1 = getImage(data.boxes);
  const image_2 = getImage(data.seasonal);
  return (
    <Collections>
      <div className="collection-cards">
        <div className="collection">
          <GatsbyImage image={image_1} alt="box gifts" />
          <div className="overlay">
            <h3 className="text">Personalised boxes</h3>
          </div>
        </div>
        <div className="collection">
          <GatsbyImage image={image_2} alt="box gifts" />
          <div className="overlay">
            <h3 className="text">Seasonal & Custom Made Presents</h3>
          </div>
        </div>
      </div>
    </Collections>
  );
};

const Collections = styled.section`
  max-width: 1170px;
  margin: 3rem auto;

  .collection-cards {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    .collection {
      margin: auto;
      position: relative;
      cursor: pointer;
      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        display: grid;

        &:hover {
          opacity: 0;
          transition: 300ms;
        }

        .text {
          color: var(--main-white);
          font-weight: normal;
          margin: auto;
          width: 80%;
          text-align: center;
          text-transform: uppercase;
          line-height: 2rem;
          font-family: var(--main-font);
        }
      }
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

export default ProductCollections;
