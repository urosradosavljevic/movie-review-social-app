import styled from "styled-components";

export const ReviewCardHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: relative;
  .review-delete {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
`;