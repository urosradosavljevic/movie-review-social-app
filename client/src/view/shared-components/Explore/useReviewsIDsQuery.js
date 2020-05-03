import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const query = gql`
  query Reviews {
    reviews {
      _id
    }
  }
`;

export default () =>
  useQuery(query, {
    onError(err) {
      console.error(err);
    },
  });
