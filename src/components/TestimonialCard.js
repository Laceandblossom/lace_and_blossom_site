import React from "react";
import styled from "styled-components";

const TestimonialCard = () => {
  return (
    <Card>
      <p>
        I love my hug in a box! It arrived in a few days and I was pleased with
        the quality would recomend it to any one.
      </p>
      <p>
        <strong>
          <em>Lynne Higginson</em>
        </strong>
      </p>
    </Card>
  );
};

const Card = styled.article`
  background-color: var(--dark-gray);
  color: var(--main-white);
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 2rem 1rem;
`;

export default TestimonialCard;
