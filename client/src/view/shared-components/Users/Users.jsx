import React from "react";
import useUsersQuery from "./useUsersQuery";
import { UserCard } from "./components/UserCard/UserCard";
import useAuthUser from "../../../redux/hooks/useAuthUser";
import { List } from "../List";

export const Users = () => {
  const { loading, data } = useUsersQuery();

  const { authUser } = useAuthUser();

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Users</h3>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <List>
          {data.users.reduce((result, user) => {
            if (user._id !== authUser._id) {
              result.push(
                <UserCard
                  following={
                    authUser.following.indexOf(user._id) >= 0 ? true : false
                  }
                  key={user._id}
                  authUserId={authUser._id}
                  name={user.name}
                  id={user._id}
                />
              );
            }
            return result;
          }, [])}
        </List>
      )}
    </div>
  );
};
