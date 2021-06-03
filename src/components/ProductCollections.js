import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageLayout } from "../components/styles/GridLayout";

const query = graphql`
  {
    allStrapiProductCollections {
      nodes {
        Slug
        collection_name
        collection_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                layout: CONSTRAINED
                placeholder: BLURRED
                height: 400
              )
            }
          }
        }
      }
    }
  }
`;

const ProductCollections = () => {
  const data = useStaticQuery(query);
  const nodes = data.allStrapiProductCollections.nodes;

  // console.log(nodes);

  return (
    <Collections>
      <ImageLayout>
        <div className="collection-cards">
          {nodes.map((node) => {
            return node.collection_image.map((image, index) => {
              const pathToImage = getImage(image.localFile);
              return (
                <div className="collection" key={index}>
                  <Link to={`/collections/${node.Slug}`}>
                    <GatsbyImage image={pathToImage} alt="" />
                    <div className="overlay">
                      <h3 className="text">{node.collection_name}</h3>
                    </div>
                  </Link>
                </div>
              );
            });
          })}
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
  @media (max-width: 650px) {
    .text {
      font-size: 1rem;
    }
  }
`;

export default ProductCollections;
