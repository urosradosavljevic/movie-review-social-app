import React from "react";
import useFollowUserMutation from "../../../../../apollo-hooks/useFollowUserMutation";
import useAuthUser from "../../../../../redux/hooks/useAuthUser";
import { Button } from "../../../../shared-components/Buttons";
import { UserImage, UserName, UserInfoWrapper } from "../UserInfo";

export const UserInfo = ({ user }) => {
  const [followUser] = useFollowUserMutation();

  const { authUser } = useAuthUser();

  return (
    <UserInfoWrapper>
      <UserImage>
        <span>{user.name.slice(0, 2)}</span>
      </UserImage>
      <UserName>
        <h2>{user.name}</h2>
        {user._id !== authUser._id ? (
          <Button
            onClick={() =>
              followUser({
                variables: {
                  userId: authUser._id,
                  idToFollow: user._id,
                },
              })
            }
          >
            {/* {authUser.following.indexOf(user._id)} */}
            {authUser.following.indexOf(user._id) > 0 ? "Unfollow" : "Follow"}
          </Button>
        ) : (
          <Button onClick={() => console.log("edit")}>Edit profile</Button>
        )}
      </UserName>
    </UserInfoWrapper>
  );
};
