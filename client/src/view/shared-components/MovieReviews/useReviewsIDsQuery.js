import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const query = gql`
  query UserReviews($userId: ID!) {
    userReviews(userId: $userId) {
      _id
    }
  }
`;

export default (userId) => {
  console.log(userId);
  return useQuery(query, {
    variables: { userId },
    onError(err) {
      console.error(err);
    },
  });
};
