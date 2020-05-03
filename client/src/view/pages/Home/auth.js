import React, { useState } from "react";

import { Header } from "../../shared-components/Header";
import { AddMovieReview } from "./../../shared-components/AddMovieReview/AddMovieReview";
import { MainContentWrapper } from "./../../shared-components/MainContentWrapper";
import { MovieReviews } from "../../shared-components/MovieReviews/MovieReviews";

import { HomeWrapper } from "./components/HomeWrapper";

export const AuthHome = () => {
  const [addReviewExpand, setAddReviewExpand] = useState(false);
  return (
    <HomeWrapper>
      <Header />
      <MainContentWrapper>
        <aside>aside navigation</aside>
        <section>
          main content
          <AddMovieReview
            addReviewExpand={addReviewExpand}
            setAddReviewExpand={setAddReviewExpand}
          />
          <MovieReviews userId={""} />
        </section>
        <aside>chat</aside>
      </MainContentWrapper>
      <footer>footer</footer>
    </HomeWrapper>
  );
};
