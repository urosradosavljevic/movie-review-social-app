import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation($userId: ID!, $idToFollow: ID!) {
    followUser(userId: $userId, idToFollow: $idToFollow) {
      _id
      following
    }
  }
`;

export default () =>
  useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });
