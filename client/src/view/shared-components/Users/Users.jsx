import React from "react";
import useUsersQuery from "./useUsersQuery";
import { UserCard } from "./components/UserCard/UserCard";
import useAuthUser from "../../../redux/hooks/useAuthUser";

export const Users = () => {
  const { loading, error, data } = useUsersQuery();

  const { authUser } = useAuthUser();

  return (
    <div>
      <h2>Users</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
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
        </ul>
      )}
    </div>
  );
};
