import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { graphql } from "gatsby";
import { SubTitle } from "../../components/styles/Styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageLayout } from "../../components/styles/GridLayout";

const CollectionTemplate = ({ pageContext: { collection_name }, data }) => {
  const images = data.strapiProductCollections.gallery_images;
  {
    console.log(images);
  }

  return (
    <main>
      <Header />
      <Navbar />

      <SubTitle>{collection_name}</SubTitle>

      <ImageLayout>
        <div>
          <div className="collection-cards">
            {images.map((theImage, index) => {
              const pathToImage = getImage(theImage.localFile);
              return (
                <GatsbyImage
                  image={pathToImage}
                  alt=""
                  key={index}
                  className="collection"
                />
              );
            })}
          </div>
        </div>
      </ImageLayout>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query getSingleProductCollections($collection_name: String) {
    strapiProductCollections(collection_name: { eq: $collection_name }) {
      collection_name
      gallery_images {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 400
              layout: CONSTRAINED
              height: 400
              placeholder: BLURRED
            )
            id
          }
        }
      }
    }
  }
`;

export default CollectionTemplate;
