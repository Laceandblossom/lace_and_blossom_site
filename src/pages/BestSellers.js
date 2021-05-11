import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { PageHeading } from "../components/styles/Styles";

const BestSellers = () => {
  return (
    <Layout>
      <Best>
        <PageHeading>Best Sellers</PageHeading>
      </Best>
    </Layout>
  );
};

const Best = styled.section`
  margin: 3rem;
`;
export default BestSellers;
