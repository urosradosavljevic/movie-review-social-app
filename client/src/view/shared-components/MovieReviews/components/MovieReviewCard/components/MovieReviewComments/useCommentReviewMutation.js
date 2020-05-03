import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { query as reviewCommentsQuery } from "./useReviewCommentsQuery";

export const mutation = gql`
  mutation($userId: ID!, $reviewId: ID!, $text: String!) {
    commentReview(userId: $userId, reviewId: $reviewId, text: $text) {
      _id
      text
      time
      user {
        _id
        name
      }
    }
  }
`;

export default () => {
  let [commentReview] = useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });

  return (reviewId, user, text) => {
    return commentReview({
      variables: { reviewId, userId: user._id, text },
      update: (store, { data }) => {
        const { reviewComments: comments } = store.readQuery({
          query: reviewCommentsQuery,
          variables: { reviewId },
        });

        store.writeQuery({
          query: reviewCommentsQuery,
          variables: { reviewId },
          data: {
            reviewComments: [...comments, data.commentReview],
          },
        });
      },
    });
  };
};
