import React from "react";
import {
  UserCardWrapper,
  UserCredentials,
  UserIcon,
  UserWrapper,
} from "./components/UserCard";
import { Button } from "../../../Buttons";
import * as routes from "../../../../../constants/routes";

import useFollowUserMutation from "../../../../../apollo-hooks/useFollowUserMutation";
import { Link } from "react-router-dom";

export const UserCard = ({ name, id, authUserId, following }) => {
  const [followUser] = useFollowUserMutation();

  return (
    <UserCardWrapper>
      <Link to={routes.USER + name}>
        <UserWrapper>
          <UserIcon
            src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_44-512.png"
            alt="movie icon"
          />
          <UserCredentials>{name}</UserCredentials>
        </UserWrapper>
      </Link>
      <Button
        onClick={() =>
          followUser({ variables: { userId: authUserId, idToFollow: id } })
        }
      >
        {following ? "Unfollow" : "Follow"}
      </Button>
    </UserCardWrapper>
  );
};
