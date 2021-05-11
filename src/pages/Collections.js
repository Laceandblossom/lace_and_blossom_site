import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { PageHeading } from "../components/styles/Styles";

import ProductCollections from "../components/ProductCollections";

const Collections = () => {
  return (
    <Layout>
      <CollectionPage>
        <PageHeading>Collections</PageHeading>
        <ProductCollections />
      </CollectionPage>
    </Layout>
  );
};

const CollectionPage = styled.section`
  margin: 3rem;
`;
export default Collections;
