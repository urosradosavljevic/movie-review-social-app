import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const query = gql`
  query {
    users {
      _id
      email
      name
      following
    }
  }
`;

export default () =>
  useQuery(query, {
    onError(err) {
      console.error(err);
    },
  });
