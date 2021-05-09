import React from "react";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Reviews>
      <h2> People said... </h2>

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

  h2 {
    text-align: center;
  }
  section {
    max-width: 1170px;
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
