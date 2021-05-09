import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <ExampleCard>
      <div className="title">
        <h3>this is a box</h3>
      </div>
      <div className="text-container">
        <p className="text">this is some text</p>
      </div>
    </ExampleCard>
  );
};

const ExampleCard = styled.article`
  .title {
    height: 200px;
    border: 1px solid red;
    h3 {
      color: yellow;
    }
  }

  .text {
    color: white;
  }

  background-color: green;
  height: fit-content;
  width: 200px;
  margin-left: 400px;
`;

export default Card;
