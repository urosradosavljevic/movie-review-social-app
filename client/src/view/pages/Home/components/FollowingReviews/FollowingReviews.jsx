import React from "react";
import { AddMovieReview } from "../../../../shared-components/AddMovieReview/AddMovieReview";
import { MovieReviews } from "../../../../shared-components/MovieReviews/MovieReviews";
import useFollowingReviewsQuery from "./useFollowingReviewsQuery";

export const FollowingReviews = ({ following }) => {
  const { loading, data } = useFollowingReviewsQuery(following);

  if (loading) return <h3>loading...</h3>;

  return (
    <>
      <AddMovieReview />
      <MovieReviews reviewsIds={data && data.followingReviews} />
    </>
  );
};
