import React from "react";
import Carousel from "styled-components-carousel";
import TestimonialCard from "./TestimonialCard";
import styled from "styled-components";

const Testimonials = () => {
  return (
    <Reviews>
      <section>
        <h2> People said... </h2>
        <Carousel
          breakpoints={[
            {
              size: 200,
              settings: {
                slidesToShow: 1,
                showArrows: true,
                showIndicator: false,
                swipeable: true,
              },
            },
            {
              size: 600,
              settings: {
                slidesToShow: 3,
                showArrows: true,
                showIndicator: true,
                swipeable: true,
                scaleOnFocus: 1,
              },
            },
            {
              size: 1000,
              settings: {
                slidesToShow: 3,
                showArrows: true,
                showIndicator: true,
                swipeable: true,
              },
            },
          ]}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Carousel>
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
  }
`;

export default Testimonials;
