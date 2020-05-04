import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";

export default () => {
  const mapState = useCallback(
    (state) => ({
      authUser: state.sessionState.authUser,
    }),
    []
  );

  const { authUser } = useMappedState(mapState);

  return { authUser };
};
