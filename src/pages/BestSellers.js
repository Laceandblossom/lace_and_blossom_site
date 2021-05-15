import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Best from "../components/Best";
import { PageHeading } from "../components/styles/Styles";

const BestSellers = () => {
  return (
    <Layout>
      <Popular>
        <PageHeading>Best Sellers</PageHeading>
        <Best />
      </Popular>
    </Layout>
  );
};

const Popular = styled.section`
  margin: 3rem;
  @media screen and (max-width: 501px) {
    margin-left: 1rem;
  }
`;

export default BestSellers;
