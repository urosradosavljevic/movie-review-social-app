import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

export const query = gql`
  query($userId: ID!) {
    userReviews(userId: $userId) {
      _id
    }
  }
`;

export default () =>
  useLazyQuery(query, {
    onError(err) {
      console.error(err);
    },
  });
