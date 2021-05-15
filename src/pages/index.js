import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureProducts from "../components/FeatureProducts";
import Testimonials from "../components/Testimonials";
import ProductCollections from "../components/ProductCollections";
import SocialShowcase from "../components/SocialShowcase";
import { Link } from "gatsby";
import { SubTitle } from "../components/styles/Styles";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <FeatureProducts />
        <Testimonials />

        <SubTitle>
          <Link to="/Collections">Collections</Link>
        </SubTitle>

        <ProductCollections />
        <SocialShowcase />
      </Layout>
    </main>
  );
};

export default IndexPage;
