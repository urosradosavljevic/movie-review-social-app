import React from "react";
import { ListItem } from "./ListItem";

export const SideNav = ({ exploreFlag, setExploreFlag }) => {
  return (
    <ul>
      <ListItem selected={!exploreFlag} onClick={() => setExploreFlag(false)}>
        Explore Reviews
      </ListItem>
      <ListItem selected={exploreFlag} onClick={() => setExploreFlag(true)}>
        Following
      </ListItem>
    </ul>
  );
};
