import React from "react";
import { ListItem } from "../../../../shared-components/ListItem";
import { List } from "../../../../shared-components/List";
import { SideNavWrapper } from "./SideNavWrapper";

export const SideNav = ({ exploreFlag, setExploreFlag }) => {
  return (
    <SideNavWrapper>
      <List>
        <ListItem selected={exploreFlag} onClick={() => setExploreFlag(true)}>
          Explore Reviews
        </ListItem>
        <ListItem selected={!exploreFlag} onClick={() => setExploreFlag(false)}>
          Following
        </ListItem>
      </List>
    </SideNavWrapper>
  );
};
