import styled from "styled-components";

export const MovieReviewCardWrapper = styled.section`
  margin: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;
export const ReviewCardBody = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0.5rem 1rem;
  h3 {
    margin-bottom: 0.3rem;
  }
`;
export const ReviewCardFooter = styled.footer`
  margin: 0 15px;
  font-size: 14px;
  box-sizing: border-box;

  .likes {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ReviewCardHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: relative;
  .review-delete {
    position: absolute;
    top: 5px;
    right: 8px;
    cursor: pointer;
  }
`;
export const ReviewCardImg = styled.img`
  width: 120px;
  position: relative;
  top: -0.2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
export const ReviewCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;
export const ReviewCardAuthor = styled.span`
  padding: 0;
  margin: 0;
  font-size: 14px;
`;
export const ReviewCardRating = styled.span`
  padding: 0;
  margin: 0;
  font-size: 14px;
  margin-top: 10px;
`;
