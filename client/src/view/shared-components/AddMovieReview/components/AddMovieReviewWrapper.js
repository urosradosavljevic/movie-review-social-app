import styled from "styled-components";

export const AddMovieReviewWrapper = styled.div`
  position: relative;
  margin: 15px;
  padding: 0 10px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  #cancel-add-review {
    position: absolute;
    right: 25px;
    top: 8px;
    cursor: pointer;
  }
`;
