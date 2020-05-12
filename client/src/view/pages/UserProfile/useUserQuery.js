import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const query = gql`
  query($email: String!) {
    user(email: $email) {
      _id
      reviews {
        _id
      }
      name
      following
    }
  }
`;

export default (email) =>
  useQuery(query, {
    variables: { email },
    onError(err) {
      console.error(err);
    },
  });
