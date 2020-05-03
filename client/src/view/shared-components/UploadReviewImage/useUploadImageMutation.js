import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation($file: Upload!) {
    uploadReviewImage(file: $file)
  }
`;

export default () =>
  useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });
