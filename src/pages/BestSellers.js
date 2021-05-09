import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const BestSellers = () => {
  return (
    <Layout>
      <Best>
        <h1>Best Sellers</h1>
      </Best>
    </Layout>
  );
};

const Best = styled.section`
  margin: 3rem;
`;
export default BestSellers;
