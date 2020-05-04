import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

export const query = gql`
  query($token: String!) {
    verifyToken(token: $token) {
      _id
      name
      email
      following
    }
  }
`;

export default () =>
  useLazyQuery(query, {
    onError(err) {
      console.error(err);
    },
  });
