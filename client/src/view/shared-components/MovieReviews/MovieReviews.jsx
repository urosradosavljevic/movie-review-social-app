import React from "react";

// apollo
import useUserReviewsQuery from "./useReviewsIDsQuery";

//components
import { MovieReviewCard } from "./components/MovieReviewCard/MovieReviewCard";
import useAuthUser from "../../../redux/hooks/useAuthUser";

export const MovieReviews = ({ userId }) => {
  console.log("userId", userId);
  const { loading, error, data } = useUserReviewsQuery(userId);

  const { authUser } = useAuthUser();

  if (loading) return <p>Loading..</p>;

  // if (error) return <p>{error}</p>;
  if (error) console.error(error);

  return (
    <div>
      {data && data.userReviews.length === 0 ? (
        <h2>No reviews</h2>
      ) : (
        data &&
        data.userReviews.map((review) => (
          <MovieReviewCard key={review._id} user={authUser} id={review._id} />
        ))
      )}
    </div>
  );
};
