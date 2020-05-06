import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const query = gql`
  query ExploreReviews($following: [ID]!) {
    exploreReviews(following: $following) {
      _id
    }
  }
`;

export default (following) =>
  useQuery(query, {
    variables: { following },
    onError(err) {
      console.error(err);
    },
  });
