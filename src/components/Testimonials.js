import React from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";
import { SubTitle } from "../components/styles/Styles";

const Testimonials = () => {
  return (
    <Reviews>
      <SubTitle> People said... </SubTitle>

      <section>
        <div className="reviews">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
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

export default Testimonials;
