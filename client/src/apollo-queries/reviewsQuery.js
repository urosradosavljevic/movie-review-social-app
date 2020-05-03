import gql from "graphql-tag";

export const query = gql`
  query Reviews {
    reviews {
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
