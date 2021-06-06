import styled from "styled-components";

export const ImageLayout = styled.div`
  max-width: 1170px;
  margin: auto;
  text-align: center;

  .collection-cards {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    .collection {
      margin: auto;
      position: relative;
      cursor: pointer;
      margin: 0.5rem;

      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        display: grid;

        &:hover {
          opacity: 0;
          transition: 300ms;
        }

        .text {
          color: var(--main-white);
          font-weight: normal;
          margin: auto;
          width: 80%;
          text-align: center;
          text-transform: uppercase;
          line-height: 2rem;
          font-family: var(--main-font);
        }
      }
    }
  }

  @media screen and (max-width: 501px) {
    .collection-cards {
      grid-template-columns: 1fr;
    }
    .text {
      width: 95%;
      font-size: 140%;
    }
  }
`;
