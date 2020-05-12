import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import * as routes from "../../../../../constants/routes";

import {
  MovieReviewCardWrapper,
  ReviewCardHeader,
  ReviewCardImg,
  ReviewCardFooter,
  ReviewCardBody,
  ReviewCardTitle,
  ReviewCardAuthor,
  ReviewCardRating,
} from "./components/ReviewCard";
import { MoviewReviewComments } from "./components/MovieReviewComments/MoviewReviewComments";

import useLikeReviewMutation from "./useLikeReviewMutation";
import useReviewQuery from "./useReviewQuery";
import useDeleteReviewMutation from "./useDeleteReviewMutation";

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

  const renderRate = (times) => {
    let rate = "";
    while (times--) rate = `${rate} ⭐`;
    return rate;
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
          <ReviewCardImg src={review.img} />
          <ReviewCardBody>
            <ReviewCardTitle>{review.title}</ReviewCardTitle>
            <ReviewCardAuthor>
              <Link to={routes.USER + review.user.email}>
                {review.user.name}
              </Link>{" "}
              on {moment(review.createdAt).format("MMMM Do YYYY")}
            </ReviewCardAuthor>
            <ReviewCardRating>
              {renderRate(parseInt(review.rate))}
            </ReviewCardRating>
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
