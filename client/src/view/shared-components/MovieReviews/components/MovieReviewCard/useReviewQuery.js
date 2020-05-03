import { useLazyQuery } from "@apollo/react-hooks";
import { query } from "./../../../../../apollo-queries/reviewQuery";

export default () =>
  useLazyQuery(query, {
    onError(err) {
      console.error(err);
    },
  });
