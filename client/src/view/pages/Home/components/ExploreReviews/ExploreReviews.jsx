import React from "react";
import { MovieReviews } from "../../../../shared-components/MovieReviews/MovieReviews";
import useExploreReviewsQuery from "./useExploreReviewsQuery";

export const ExploreReviews = ({ following }) => {
  const { loading, error, data } = useExploreReviewsQuery(following);

  if (loading) return <h3>loading...</h3>;

  return <MovieReviews reviewsIds={data && data.exploreReviews} />;
};
