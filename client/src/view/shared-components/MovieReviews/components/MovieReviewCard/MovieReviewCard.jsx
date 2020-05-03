import React, { useEffect } from "react";

import { MovieReviewCardWrapper } from "../MovieReviewCardWrapper";
import { ReviewCardHeader } from "./components/ReviewCardHeader";
import { ReviewCardFooter } from "./components/ReviewCardFooter";
import { ReviewCardBody } from "./components/ReviewCardBody";
import { MoviewReviewComments } from "./components/MovieReviewComments/MoviewReviewComments";

// apollo
import useLikeReviewMutation from "./useLikeReviewMutation";
import useReviewQuery from "./useReviewQuery";
import useDeleteReviewMutation from "./useDeleteReviewMutation";

// styled components

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
