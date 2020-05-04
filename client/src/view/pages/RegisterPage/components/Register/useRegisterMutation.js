import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation(
    $email: String!
    $password: String!
    $confirm: String!
    $name: String!
  ) {
    createUser(
      email: $email
      password: $password
      confirm: $confirm
      name: $name
    ) {
      _id
      email
      name
      token
      following
    }
  }
`;

export default () =>
  useMutation(mutation, {
    onError(err) {
      console.error(err);
      alert(err);
    },
  });
