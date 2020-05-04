import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const query = gql`
  query($reviewId: ID!) {
    reviewComments(reviewId: $reviewId) {
      _id
      time
      text
      user {
        _id
        name
        email
      }
    }
  }
`;

export default (reviewId) =>
  useQuery(query, {
    variables: { reviewId },
    onError(err) {
      console.error(err);
    },
  });
