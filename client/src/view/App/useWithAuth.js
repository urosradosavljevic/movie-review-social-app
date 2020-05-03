import { useEffect } from "react";
import { useDispatch } from "redux-react-hook";
import * as actions from "../../constants/action_types";

// apollo
import useVerifyTokenQuery from "./useVerifyTokenQuery";

export const useWithAuth = () => {
  const dispatch = useDispatch();
  const [verifyToken, { loading, data }] = useVerifyTokenQuery();

  const auth = async () => {
    const token = localStorage.getItem("SocialAppToken");
    if (token) {
      verifyToken({ variables: { token } });
    } else {
      dispatch({ type: actions.SET_AUTH_USER, authUser: null });
    }
  };

  useEffect(() => {
    if (data) {
      const { _id, name, email } = data.verifyToken;
      if (email) {
        dispatch({
          type: actions.SET_AUTH_USER,
          authUser: {
            _id,
            name,
            email,
          },
        });
      } else {
        dispatch({ type: actions.SET_AUTH_USER, authUser: null });
      }
    }
  }, [loading, data]);

  useEffect(() => {
    auth();
  }, []);
};
