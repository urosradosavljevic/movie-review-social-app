import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";

export const query = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email
      token
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
