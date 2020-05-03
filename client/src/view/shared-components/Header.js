import React, { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as routes from "../../constants/routes";
import * as actions from "../../constants/action_types";

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #333;
`;
const HeaderRight = styled.ul`
  display: inline-block;
  list-style-type: none;
  margin: 0;
  margin-left: auto;
  padding: 0;
  background-color: #333;

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 1rem 1.2rem;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }
`;

export const Header = () => {
  const dispatch = useDispatch();

  const mapState = useCallback(
    (state) => ({
      authUser: state.sessionState.authUser,
    }),
    []
  );

  const { authUser } = useMappedState(mapState);

  const logout = () => {
    dispatch({ type: actions.SET_AUTH_USER, authUser: null });
    localStorage.removeItem("SocialAppToken");
  };

  return (
    <HeaderWrapper>
      <HeaderRight>
        <li>
          <Link to={routes.HOME}>HOME</Link>
        </li>
        <li>
          <Link to={routes.USERS + authUser.email}>
            Visit {authUser.email} profile
          </Link>
        </li>
        <li>
          <Link to={routes.HOME} onClick={logout}>
            Log out
          </Link>
        </li>
      </HeaderRight>
    </HeaderWrapper>
  );
};
