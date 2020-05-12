import React from "react";
import styled from "styled-components";
import useFollowUserMutation from "../../../../../apollo-hooks/useFollowUserMutation";
import useAuthUser from "../../../../../redux/hooks/useAuthUser";
import { Button } from "../../../../shared-components/Buttons";

export const UserImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 2rem;
  border-radius: 50%;
  background: lightgray;
  text-align: center;
  line-height: 200px;
`;

export const UserName = styled.div`
  margin: 2rem;
`;

export const UserInfo = ({ user }) => {
  const [followUser] = useFollowUserMutation();

  const { authUser } = useAuthUser();
  return (
    <div>
      User info
      <UserImage>User image</UserImage>
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
          <Button>Edit profile</Button>
        )}
      </UserName>
    </div>
  );
};
