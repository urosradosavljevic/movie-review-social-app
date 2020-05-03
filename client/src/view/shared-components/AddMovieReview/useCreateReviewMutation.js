import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation(
    $title: String!
    $review: String!
    $director: String!
    $rate: Int!
    $img: String!
    $userId: String!
  ) {
    createReview(
      title: $title
      review: $review
      director: $director
      rate: $rate
      img: $img
      userId: $userId
    ) {
      _id
      title
      review
      director
      rate
      img
      user {
        name
      }
      comments {
        _id
        time
        text
        user {
          _id
          name
        }
      }
    }
  }
`;

export default () =>
  useMutation(mutation, {
    onError(err) {
      console.error(err);
    },
  });
