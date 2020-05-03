import React, { useCallback, useEffect } from "react";
import { useMappedState } from "redux-react-hook";
import styled from "styled-components";

//apollo
import useUserReviewsQuery from "./useUserReviewsIDsQuery";

//components
import { Header } from "../../shared-components/Header";
import { MainContentWrapper } from "./../../shared-components/MainContentWrapper";
import { MovieReviewCard } from "./../../shared-components/MovieReviewCard/MovieReviewCard";

export const UserImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 2rem;
  border-radius: 50%;
  background: lightgray;
  text-align: center;
  line-height: 200px;
`;

export const UserName = styled.div`
  margin: 2rem;
`;

export const UserProfile = () => {
  const [userReviewsQuery, { loading, error, data }] = useUserReviewsQuery();
  const mapState = useCallback(
    (state) => ({
      authUser: state.sessionState.authUser,
    }),
    []
  );

  const { authUser } = useMappedState(mapState);

  useEffect(() => {
    userReviewsQuery({ variables: { userId: authUser._id } });
  }, [authUser]);

  return (
    <>
      <Header />
      <MainContentWrapper>
        <div>
          User info
          <UserImage>User image</UserImage>
          <UserName>
            <h2>{authUser.name}</h2>
          </UserName>
        </div>
        <div>
          {loading ? (
            <h4>loading posts...</h4>
          ) : (
            data !== undefined &&
            data.userReviews.map((review) => (
              <MovieReviewCard
                key={review._id}
                id={review._id}
                user={authUser}
              />
            ))
          )}
        </div>
        <h3>Chat</h3>
      </MainContentWrapper>
    </>
  );
};
