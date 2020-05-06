import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const query = gql`
  query UsersById($usersIds: [ID]!) {
    usersById(usersIds: $usersIds) {
      _id
      reviews {
        _id
      }
    }
  }
`;

export default (usersIds) =>
  useQuery(query, {
    variables: { usersIds },
    onError(err) {
      console.error(err);
    },
  });
