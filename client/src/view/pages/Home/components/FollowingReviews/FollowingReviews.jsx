import React from "react";
import { AddMovieReview } from "../../../../shared-components/AddMovieReview/AddMovieReview";
import { MovieReviews } from "../../../../shared-components/MovieReviews/MovieReviews";
import useFollowingReviewsQuery from "./useFollowingReviewsQuery";

export const FollowingReviews = ({ following }) => {
  const { loading, error, data } = useFollowingReviewsQuery(following);

  if (loading) return <h3>loading...</h3>;

  return (
    <>
      <AddMovieReview />
      {console.log(data)}
      <MovieReviews reviewsIds={data && data.followingReviews} />
    </>
  );
};
