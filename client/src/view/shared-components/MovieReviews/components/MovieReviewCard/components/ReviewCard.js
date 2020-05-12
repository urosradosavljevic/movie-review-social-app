import styled from "styled-components";

export const MovieReviewCardWrapper = styled.section`
  margin: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;
export const ReviewCardHeader = styled.header`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 0 1rem 0 1rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;

  .review-delete {
    position: absolute;
    top: 22px;
    right: 8px;
    cursor: pointer;
  }
`;
export const ReviewCardAvatar = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  background: lightgray;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  margin-right: 8px;
  color: #333;
`;
export const ReviewCardAuthor = styled.span`
  padding: 0;
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
`;

export const ReviewCardBody = styled.section`
  display: flex;
  flex-direction: row;
`;
export const ReviewInfo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 1rem;

  .likes {
    font-size: 14px;
    position: absolute;
    bottom: 0;
    display: inline-flex;
    align-items: center;
  }
`;

export const ReviewCardImg = styled.img`
  width: 140px;
  position: relative;
  top: 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
export const ReviewCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-top: 10px;
`;

export const ReviewCardRating = styled.span`
  padding: 0;
  margin: 0;
  font-size: 14px;
  margin-top: 10px;
`;
export const ReviewCardFooter = styled.footer`
  margin: 0 15px;
  font-size: 14px;
  box-sizing: border-box;
`;
