import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import ProductCollections from "../components/ProductCollections";

const Collections = () => {
  return (
    <Layout>
      <CollectionPage>
        <h1>Collections</h1>
        <ProductCollections />
      </CollectionPage>
    </Layout>
  );
};

const CollectionPage = styled.section`
  margin: 3rem;
`;
export default Collections;
