import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";

// apollo
import useReviewsQuery from "./useReviewsIDsQuery";

//components
import { MovieReviewCard } from "../MovieReviewCard/MovieReviewCard";

export const Explore = () => {
  const { loading, error, data } = useReviewsQuery();

  const mapState = useCallback(
    (state) => ({
      authUser: state.sessionState.authUser,
    }),
    []
  );

  const { authUser } = useMappedState(mapState);

  if (loading) return <p>Loading..</p>;

  if (error) return <p>{error}</p>;
  // if (error) console.error(error);

  return (
    <div>
      {data && data.reviews.length === 0 ? (
        <h2>No reviews</h2>
      ) : (
        data.reviews.map((review) => (
          <MovieReviewCard key={review._id} user={authUser} id={review._id} />
        ))
      )}
    </div>
  );
};
