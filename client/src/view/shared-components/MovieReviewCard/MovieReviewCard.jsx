import React, { useEffect } from "react";
import styled from "styled-components";

import { MoviewReviewComments } from "../MovieReviewComments/MoviewReviewComments";

// apollo
import useLikeReviewMutation from "./useLikeReviewMutation";
import useReviewQuery from "./useReviewQuery";
import useDeleteReviewMutation from "./useDeleteReviewMutation";

// styled components
export const MovieReviewCardWrapper = styled.section`
  margin: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    position: relative;
    top: -0.2rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
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

export const ReviewCardFooter = styled.footer`
  border-top: 1px solid #f0f0f0;
  margin: 0.5rem 1rem;
  padding: 1rem;
  box-sizing: border-box;

  .likes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ReviewCardBody = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0.5rem 1rem;
  h3 {
    margin-bottom: 0.3rem;
  }
`;

export const MovieReviewCard = ({ id, user }) => {
  const likeReviewMu = useLikeReviewMutation();
  const deleteReviewMutation = useDeleteReviewMutation();

  const [
    loadReview,
    { loading: reviewLoading, data: reviewData },
  ] = useReviewQuery();

  const likeReview = () => {
    likeReviewMu({ reviewId: id, userId: user._id });
  };

  const deleteReview = (id) => {
    deleteReviewMutation(id);
  };

  useEffect(() => {
    loadReview({ variables: { reviewId: id } });
  }, []);

  if (reviewLoading || reviewData === undefined) {
    return <h2>loading</h2>;
  } else {
    const { review } = reviewData;
    return (
      <MovieReviewCardWrapper>
        <ReviewCardHeader>
          {review.user._id === user._id && (
            <span
              onClick={() => deleteReview(review._id)}
              className="review-delete"
            >
              x
            </span>
          )}
          <img src="https://m.media-amazon.com/images/M/MV5BNzQ3ODUzNDY2M15BMl5BanBnXkFtZTgwNzg0ODY2MTE@._V1_UY1200_CR90,0,630,1200_AL_.jpg" />
          <ReviewCardBody>
            <h3>{review.title}</h3>
            <span>
              review author: {review.user.name}, rating: {review.rate}
            </span>
            <p>{review.review.slice(0, 250)}...</p>
          </ReviewCardBody>
        </ReviewCardHeader>
        <ReviewCardFooter>
          <div className="likes">
            <div>
              Likes: <span>{review.likes.length}</span>
            </div>
            <button onClick={likeReview}>
              {review.likes.find((l) => l === user._id) ? "Dislike" : "Like"}
            </button>
          </div>
          <MoviewReviewComments reviewId={review._id} user={user} />
        </ReviewCardFooter>
      </MovieReviewCardWrapper>
    );
  }
};
