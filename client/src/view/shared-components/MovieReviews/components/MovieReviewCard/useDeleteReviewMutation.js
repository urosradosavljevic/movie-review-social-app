import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { query as reviewsQuery } from "./../../../../../apollo-queries/reviewsQuery";

export const mutation = gql`
  mutation($reviewId: ID!) {
    deleteReview(reviewId: $reviewId)
  }
`;

export default () => {
  let [deleteReview] = useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });

  return (reviewId) => {
    return deleteReview({
      variables: { reviewId },
      update: (store) => {
        const reviews = store.readQuery({
          query: reviewsQuery,
        });

        const temp = reviews.reviews.filter(
          (review) => review._id !== reviewId
        );

        store.writeQuery({
          query: reviewsQuery,
          data: {
            reviews: [...temp],
          },
        });
      },
    });
  };
};
