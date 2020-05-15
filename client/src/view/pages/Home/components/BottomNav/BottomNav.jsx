import React from "react";
import { BottomNavWrapper } from "./BottomNavWrapper";
import { MdExplore, MdPeople, MdContacts } from "react-icons/md";

export const BottomNav = ({
  exploreFlag,
  setExploreFlag,
  setUsersExpand,
  usersExpand,
}) => {
  return (
    <BottomNavWrapper>
      <button
        className={!usersExpand && exploreFlag ? "active" : null}
        onClick={() => {
          setExploreFlag(true);
          setUsersExpand(false);
        }}
      >
        <MdExplore size={"1.8rem"} />
      </button>
      <button
        className={!usersExpand && !exploreFlag ? "active" : null}
        onClick={() => {
          setExploreFlag(false);
          setUsersExpand(false);
        }}
      >
        <MdContacts size={"1.8rem"} />
      </button>
      <button
        className={usersExpand ? "active" : null}
        onClick={() => setUsersExpand(true)}
      >
        <MdPeople size={"1.8rem"} />
      </button>
    </BottomNavWrapper>
  );
};
