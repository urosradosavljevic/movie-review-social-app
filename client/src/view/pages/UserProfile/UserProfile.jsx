import React from "react";

//components
import { Header } from "../../shared-components/Header/Header";
import { MainContentWrapper } from "./../../shared-components/MainContentWrapper";
import { MovieReviews } from "../../shared-components/MovieReviews/MovieReviews";
import useUserQuery from "./useUserQuery";
import { AddMovieReview } from "../../shared-components/AddMovieReview/AddMovieReview";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { Users } from "../../shared-components/Users/Users";

export const UserProfile = ({
  match: {
    params: { slug },
  },
}) => {
  const { loading, data } = useUserQuery(slug);

  if (loading) return <h2>Loading..</h2>;

  return (
    <>
      <Header />
      <MainContentWrapper>
        <UserInfo user={data.user} />
        <div>
          <AddMovieReview />
          <MovieReviews reviewsIds={data.user.reviews} />
        </div>
        <Users />
      </MainContentWrapper>
    </>
  );
};
