import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { query as reviewCommentsQuery } from "./useReviewCommentsQuery";

export const mutation = gql`
  mutation($commentId: ID!) {
    deleteCommentReview(commentId: $commentId)
  }
`;

export default () => {
  let [deleteCommentReview] = useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });

  return (commentId, reviewId) => {
    return deleteCommentReview({
      variables: { commentId },
      update: (store) => {
        const comments = store.readQuery({
          query: reviewCommentsQuery,
          variables: { reviewId },
        });
        const temp = comments.reviewComments.filter(
          (comment) => comment._id !== commentId
        );

        store.writeQuery({
          query: reviewCommentsQuery,
          variables: { reviewId },
          data: {
            reviewComments: [...temp],
          },
        });
      },
    });
  };
};
