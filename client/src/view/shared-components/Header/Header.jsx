import React from "react";
import { useDispatch } from "redux-react-hook";
import { Link } from "react-router-dom";
import * as routes from "../../../constants/routes";
import * as actions from "../../../constants/action_types";
import useAuthUser from "../../../redux/hooks/useAuthUser";

import { HeaderWrapper } from "./HeaderWrapper";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  const dispatch = useDispatch();

  const { authUser } = useAuthUser();

  const logout = () => {
    dispatch({ type: actions.SET_AUTH_USER, authUser: null });
    localStorage.removeItem("SocialAppToken");
  };

  return (
    <HeaderWrapper>
      <HeaderNav>
        <li>
          <Link to={routes.HOME}>HOME</Link>
        </li>
        <li>
          <Link to={routes.USER + authUser.email}>My Reviews</Link>
        </li>
        <li>
          <Link to={routes.HOME} onClick={logout}>
            Log out
          </Link>
        </li>
      </HeaderNav>
    </HeaderWrapper>
  );
};
