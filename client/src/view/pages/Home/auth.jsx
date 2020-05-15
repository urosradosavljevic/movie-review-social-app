import React, { useState } from "react";

import { Header } from "../../shared-components/Header/Header";
import { MainContentWrapper } from "./../../shared-components/MainContentWrapper";

import { SideNav } from "./components/SideNav/SideNav";
import { HomeWrapper } from "./components/HomeWrapper";
import { Users } from "../../shared-components/Users/Users";
import { ExploreReviews } from "./components/ExploreReviews/ExploreReviews";
import { FollowingReviews } from "./components/FollowingReviews/FollowingReviews";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { Footer } from "../../shared-components/Footer";

export const AuthHome = ({ authUser: { following } }) => {
  const [exploreFlag, setExploreFlag] = useState(false);
  const [usersExpand, setUsersExpand] = useState(false);
  return (
    <HomeWrapper>
      <Header />
      <MainContentWrapper>
        <SideNav exploreFlag={exploreFlag} setExploreFlag={setExploreFlag} />
        <section>
          {exploreFlag ? (
            <ExploreReviews following={following} />
          ) : (
            <FollowingReviews following={following} />
          )}
        </section>
        <Users usersExpand={usersExpand} />
        <BottomNav
          exploreFlag={exploreFlag}
          setExploreFlag={setExploreFlag}
          usersExpand={usersExpand}
          setUsersExpand={setUsersExpand}
        />
      </MainContentWrapper>
      <Footer>
        <a href={"https://github.com/urosradosavljevic"}>
          Uros Radosavljevic 2020
        </a>
      </Footer>
    </HomeWrapper>
  );
};
