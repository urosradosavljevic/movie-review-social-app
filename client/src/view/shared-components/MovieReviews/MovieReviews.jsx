import React from "react";

//components
import { MovieReviewCard } from "./components/MovieReviewCard/MovieReviewCard";
import useAuthUser from "../../../redux/hooks/useAuthUser";

export const MovieReviews = ({ reviewsIds }) => {
  const { authUser } = useAuthUser();

  return (
    <div>
      {reviewsIds.length > 0 ? (
        reviewsIds.map((review) => (
          <MovieReviewCard key={review._id} user={authUser} id={review._id} />
        ))
      ) : (
        <h2>No reviews</h2>
      )}
    </div>
  );
};
