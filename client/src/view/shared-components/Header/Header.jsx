import React, { useState } from "react";
import { useDispatch } from "redux-react-hook";
import { Link } from "react-router-dom";
import * as routes from "../../../constants/routes";
import * as actions from "../../../constants/action_types";
import useAuthUser from "../../../redux/hooks/useAuthUser";

import { HeaderWrapper } from "./HeaderWrapper";
import { MenuIcon } from "./MenuIcon";
import { HeaderNav } from "./HeaderNav";
import { MdDehaze, MdClear } from "react-icons/md";

export const Header = () => {
  const dispatch = useDispatch();

  const { authUser } = useAuthUser();
  const [navExpanded, setNavExpanded] = useState(false);

  const logout = () => {
    dispatch({ type: actions.SET_AUTH_USER, authUser: null });
    localStorage.removeItem("SocialAppToken");
  };

  return (
    <HeaderWrapper>
      <MenuIcon onClick={() => setNavExpanded(!navExpanded)}>
        {navExpanded ? <MdClear size={"2rem"} /> : <MdDehaze size={"2em"} />}
      </MenuIcon>
      <HeaderNav className={navExpanded ? "expanded" : null}>
        <li>
          <Link to={routes.HOME}>HOME</Link>
        </li>
        <li>
          <Link to={routes.USER + authUser.email}>My Profile</Link>
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
