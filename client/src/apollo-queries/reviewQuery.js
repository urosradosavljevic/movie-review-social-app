import gql from "graphql-tag";

export const query = gql`
  query Review($reviewId: ID!) {
    review(id: $reviewId) {
      _id
      title
      review
      director
      rate
      img
      user {
        _id
        name
      }
      likes
      comments {
        _id
        text
        time
        user {
          _id
          name
        }
      }
    }
  }
`;
