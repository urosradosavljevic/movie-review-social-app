import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import * as routes from "../../../../../constants/routes";
import { renderRate } from "../../../../../helpers";

import {
  MovieReviewCardWrapper,
  ReviewCardHeader,
  ReviewCardImg,
  ReviewCardFooter,
  ReviewCardBody,
  ReviewInfo,
  ReviewCardTitle,
  ReviewCardAuthor,
  ReviewCardRating,
  ReviewCardAvatar,
} from "./components/ReviewCard";
import { MoviewReviewComments } from "./components/MovieReviewComments/MoviewReviewComments";

import useLikeReviewMutation from "./useLikeReviewMutation";
import useReviewQuery from "./useReviewQuery";
import useDeleteReviewMutation from "./useDeleteReviewMutation";
import { Button } from "../../../Buttons";

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
          <ReviewCardAuthor>
            <ReviewCardAvatar>{review.user.name.slice(0, 2)}</ReviewCardAvatar>
            <Link to={routes.USER + review.user.email}>
              {review.user.name}
            </Link>{" "}
            on {moment(review.createdAt).format("MMMM Do YYYY")}
          </ReviewCardAuthor>
          {review.user._id === user._id && (
            <span
              onClick={() => deleteReview(review._id)}
              className="review-delete"
            >
              x
            </span>
          )}
        </ReviewCardHeader>
        <ReviewCardBody>
          <ReviewCardImg src={review.img} />
          <ReviewInfo>
            <ReviewCardTitle>{review.title}</ReviewCardTitle>
            <ReviewCardRating>
              {renderRate(parseInt(review.rate))}
            </ReviewCardRating>
            <p>{review.review.slice(0, 250)}...</p>
            <div className="likes">
              <div>
                <span>
                  {review.likes.length}
                  {review.likes.length === 1 ? " like" : " likes"}
                </span>
              </div>
              <Button like onClick={likeReview}>
                {review.likes.find((l) => l === user._id) ? "Dislike" : "Like"}
              </Button>
            </div>
          </ReviewInfo>
        </ReviewCardBody>
        <ReviewCardFooter>
          <MoviewReviewComments reviewId={review._id} user={user} />
        </ReviewCardFooter>
      </MovieReviewCardWrapper>
    );
  }
};
