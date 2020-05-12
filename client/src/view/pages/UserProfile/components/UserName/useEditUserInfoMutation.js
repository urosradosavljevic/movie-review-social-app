import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation EditUserInfo($userId: ID!, $name: String!) {
    editUserInfo(userId: $userId, name: $name) {
      _id
    }
  }
`;

export default () =>
  useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });
