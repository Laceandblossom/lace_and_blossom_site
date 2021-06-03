import React from "react";
import styled from "styled-components";
import { SubTitle } from "../components/styles/Styles";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allStrapiReviews {
      nodes {
        review
        customer_name
      }
    }
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(query);
  const nodes = data.allStrapiReviews.nodes;
  return (
    <Reviews>
      <SubTitle> People said... </SubTitle>

      <section>
        <div className="reviews">
          {nodes.map((node, index) => {
            return (
              <Card key={index}>
                <p>
                  <span className="quotation-marks"> " </span>
                  {node.review}
                  <span className="quotation-marks"> " </span>
                </p>
                <p>
                  <strong>
                    <em>{node.customer_name}</em>
                  </strong>
                </p>
              </Card>
            );
          })}
        </div>
      </section>
    </Reviews>
  );
};

const Reviews = styled.section`
  background-color: var(--brand-color);
  margin: 3rem auto;
  padding: 3rem 0rem;
  text-align: center;

  section {
    width: 100vw;
    margin: auto;
    .reviews {
      align-items: center;
      margin: auto;
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (max-width: 768px) {
    section {
      .reviews {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const Card = styled.article`
  background-color: var(--dark-gray);
  color: var(--main-white);
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 2rem 1rem;

  .quotation-marks {
    font-size: 1.2rem;
  }
`;

export default Testimonials;
