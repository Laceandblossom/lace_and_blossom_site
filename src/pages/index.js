import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureProducts from "../components/FeatureProducts";
import Testimonials from "../components/Testimonials";
import ProductCollections from "../components/ProductCollections";
import SocialShowcase from "../components/SocialShowcase";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <FeatureProducts />
        <Testimonials />
        <ProductCollections />
        <SocialShowcase />
      </Layout>
    </main>
  );
};

export default IndexPage;
