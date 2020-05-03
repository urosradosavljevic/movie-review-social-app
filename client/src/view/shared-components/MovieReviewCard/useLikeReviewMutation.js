import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation LikeReview($userId: ID!, $reviewId: ID!) {
    likeReview(userId: $userId, reviewId: $reviewId) {
      _id
      title
      likes
    }
  }
`;

export default () => {
  let [likeReview] = useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });

  return ({ reviewId, userId }) => {
    return likeReview({
      variables: { reviewId, userId },
    });
  };
};
