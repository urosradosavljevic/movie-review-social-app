import React, { useState } from "react";

import { Header } from "../../shared-components/Header/Header";
import { AddMovieReview } from "./../../shared-components/AddMovieReview/AddMovieReview";
import { MainContentWrapper } from "./../../shared-components/MainContentWrapper";
import { MovieReviews } from "../../shared-components/MovieReviews/MovieReviews";

import { SideNav } from "./components/SideNav/SideNav";
import { HomeWrapper } from "./components/HomeWrapper";
import { Users } from "../../shared-components/Users/Users";

export const AuthHome = () => {
  const [addReviewExpand, setAddReviewExpand] = useState(false);
  const [exploreFlag, setExploreFlag] = useState(false);
  return (
    <HomeWrapper>
      <Header />
      <MainContentWrapper>
        <SideNav exploreFlag={exploreFlag} setExploreFlag={setExploreFlag} />
        <section>
          <AddMovieReview
            addReviewExpand={addReviewExpand}
            setAddReviewExpand={setAddReviewExpand}
          />
          <MovieReviews userId={""} />
        </section>
        <Users />
      </MainContentWrapper>
      <footer>footer</footer>
    </HomeWrapper>
  );
};
