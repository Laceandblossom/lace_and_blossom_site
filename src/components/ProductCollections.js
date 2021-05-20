import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageLayout } from "../components/styles/GridLayout";

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
    frame: file(relativePath: { eq: "collections/picture-frame.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 400
          width: 400
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
    personal: file(relativePath: { eq: "collections/personal-gifts.png" }) {
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
  const image_3 = getImage(data.frame);
  const image_4 = getImage(data.personal);

  return (
    <Collections>
      <ImageLayout>
        <div className="collection-cards">
          <div className="collection">
            <GatsbyImage image={image_1} alt="box gifts" />
            <div className="overlay">
              <h3 className="text">Personalised boxes</h3>
            </div>
          </div>
          <div className="collection">
            <GatsbyImage image={image_2} alt="seasonal gifts" />
            <div className="overlay">
              <h3 className="text">Seasonal & Custom Made Presents</h3>
            </div>
          </div>
          <div className="collection">
            <GatsbyImage image={image_3} alt="picture frames" />
            <div className="overlay">
              <h3 className="text">Picture Frames</h3>
            </div>
          </div>
          <div className="collection">
            <GatsbyImage image={image_4} alt="Personalised Gifts" />
            <div className="overlay">
              <h3 className="text">Personalised Gifts</h3>
            </div>
          </div>
        </div>
      </ImageLayout>
    </Collections>
  );
};

const Collections = styled.section`
  max-width: 1170px;
  margin: auto;
  text-align: center;

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
`;

export default ProductCollections;
