import React, { useState } from "react";
import useFollowUserMutation from "../../../../../apollo-hooks/useFollowUserMutation";
import useAuthUser from "../../../../../redux/hooks/useAuthUser";
import { Button } from "../../../../shared-components/Buttons";
import { UserName } from "../UserName/UserName";
import { UserImage, UserNameWrapper, UserInfoWrapper } from "../UserInfo";

export const UserInfo = ({ user }) => {
  const [followUser] = useFollowUserMutation();
  const { authUser } = useAuthUser();
  const [editFlag, setEditFlag] = useState(false);

  return (
    <UserInfoWrapper>
      <UserImage>
        <span>{user.name.slice(0, 2)}</span>
      </UserImage>
      <UserNameWrapper>
        <UserName
          userId={authUser._id}
          editFlag={editFlag}
          setEditFlag={setEditFlag}
          name={user.name}
        />
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
            {authUser.following.indexOf(user._id) > 0 ? "Unfollow" : "Follow"}
          </Button>
        ) : (
          <Button onClick={() => setEditFlag(!editFlag)}>
            {editFlag ? "Close" : "Edit"}
          </Button>
        )}
      </UserNameWrapper>
    </UserInfoWrapper>
  );
};
